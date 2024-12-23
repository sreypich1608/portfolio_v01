const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    var token = "7080607954:AAFnN506rxO0GIWV4B8fjkH5yl0jkxFPIts";
    var chat_id = "-4650287889";

    const data = `
<b>📝 Name:</b> <i>${name}</i>\n
<b>📧 Email:</b> <i>${email}</i>\n
<b>💬 Message:</b> <i>${message}</i>
`;

    var encodedData = encodeURIComponent(data);

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodedData}&parse_mode=HTML`;
    let api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = () => {
        if (api.readyState === 4 && api.status === 200) {
            alert('Message sent successfully!');
            form.reset();
        } else if (api.readyState === 4) {
            alert('Failed to send the message.');
        }
    };
})