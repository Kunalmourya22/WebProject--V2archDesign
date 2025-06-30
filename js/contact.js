function initMap() {
    const location = { lat: 26.7906, lng: 81.0228 };  // Updated coordinates for Omaxe Avenue
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 16,
        center: location,
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "on" }]
            }
        ]
    });
    
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'v2archdesign - Omaxe Avenue',
        animation: google.maps.Animation.DROP
    });

    const infowindow = new google.maps.InfoWindow({
        content: '<div style="padding: 10px;"><strong>v2archdesign</strong><br>Omaxe Avenue, Omaxe City Rd,<br>Omaxe City, Lucknow,<br>Uttar Pradesh 226014</div>'
    });

    marker.addListener('click', () => {
        infowindow.open(map, marker);
    });

    // Open info window by default
    infowindow.open(map, marker);
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[placeholder="Your name.."]').value;
        const email = this.querySelector('input[placeholder="Email.."]').value;
        const website = this.querySelector('input[placeholder="website.."]').value;
        const message = this.querySelector('textarea').value;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('website', website);
        formData.append('message', message);

        fetch('../php/send-email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                alert('Thank you! Your message has been sent successfully.');
                contactForm.reset();
            } else {
                alert('Sorry, there was an error sending your message. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
        });
    });
});
