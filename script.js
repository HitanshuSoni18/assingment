 
// // /*/ Trigger GET call on UPI button call
// // getPaymentLinkButton.addEventListener('click', async () => {
// //   const upiName = document.querySelector('input[name="payment-method"]:checked').value;

// //   const response = await fetch(`localhost:8080/${upiName}`);

// //   if (response.ok) {
// //     const paymentLink = await response.json();
// //     alert(`Payment link: ${paymentLink}`);
// //   } else {
// //     alert('Failed to get payment link.');
// //   }
// // });
// // // Your JavaScript code for dynamic content generation will go here

// // // Example: Generate payment method options
// // const paymentMethods = [
// //   { id: 'phonepe', name: 'PhonePe' },
// //   { id: 'gpay', name: 'Google Pay' },
// //   { id: 'paytm', name: 'Paytm' },
// //   { id: 'bhim', name: 'BHIM' },
// // ];

// // const paymentMethodList = document.getElementById('payment-method-list');
// // paymentMethods.forEach((method) => {
// //   const listItem = document.createElement('li');
// //   listItem.innerHTML = `
// //     <input type="radio" name="payment-method" id="${method.id}" value="${method.name}">
// //     <label for="${method.id}">${method.name}</label>
// //   `;
// //   paymentMethodList.appendChild(listItem);
// // });

// // // Example: Handle send payment button click
// // const sendPaymentButton = document.getElementById('send-payment');
// // sendPaymentButton.addEventListener('click', () => {
// //   const amount = document.getElementById('amount').textContent;
// //   const phoneNumber = document.getElementById('phone-number').value;
// //   console.log(`Amount: ${amount}, Phone Number: ${phoneNumber}`);
// // });

// // // Example: Toggle notification button state
// // const notificationToggle = document.getElementById('notification-toggle');
// // let notificationOn = true;

// // notificationToggle.addEventListener('click', () => {
// //   notificationOn = !notificationOn;
// //   notificationToggle.textContent = notificationOn ? 'Turn On' : 'Turn Off';
// //   console.log(`Notification is ${notificationOn ? 'On' : 'Off'}`);
// // });

// // // Additional JavaScript logic can be added based on your requirements
// // *
// // // Detect the user agent



// // const userAgent = navigator.userAgent.toLowerCase();

// // // Function to show/hide payment options based on the operating system
// // function togglePaymentOptions() {
// //   const paytm = document.getElementById('Paytm');
// //   const bhim = document.getElementById('Bhim');
// //   const paymentOptions = document.querySelector('.payment-methods');

// //   if (/iphone|ipad|ipod/.test(userAgent)) {
// //     // Hide Paytm and BHIM for iOS
// //     paytm.style.display = 'none';
// //     bhim.style.display = 'none';
// //   }

// //   if (!/android|iphone|ipad|ipod/.test(userAgent)) {
// //     // Display "No payment options available" for desktop
// //     paymentOptions.innerHTML = '<p>No payment options available</p>';
// //   }

// // }

// // // Call the function on page load
// // window.addEventListener('load', togglePaymentOptions);

// // const sendPaymentButton = document.getElementById('send-payment');
// // const getPaymentLinkButton = document.getElementById('get-payment-link');
// // const phoneNumberInput = document.getElementById('phone-number');

// // // Send POST call on send click
// // sendPaymentButton.addEventListener('click', async () => {
// //   const amount = 599;
// //   const phoneNumber = phoneNumberInput.value;

// //   const response = await fetch('http://localhost:8080/send', {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify({
// //       amount,
// //       phoneNumber
// //     })
// //   });

// //   if (response.ok) {
// //     alert('Payment sent successfully!');
// //   } else {
// //     alert('Failed to send payment.');
// //   }
// // }); */

// // const userAgent = navigator.userAgent.toLowerCase();

// // // Function to show/hide payment options based on the operating system
// // function togglePaymentOptions() {
// //   const paytm = document.getElementById('Paytm');
// //   const bhim = document.getElementById('Bhim');
// //   const paymentOptions = document.querySelector('.payment-methods');

// //   if (/iphone|ipad|ipod/.test(userAgent)) {
// //     // Hide Paytm and BHIM for iOS
// //     paytm.style.display = 'none';
// //     bhim.style.display = 'none';
// //   }

// //   // if (!/android|iphone|ipad|ipod/.test(userAgent)) {
// //   //   // Display "No payment options available" for desktop
// //   //   paymentOptions.innerHTML = '<p>No payment options available</p>';
// //   // }
// // }

// // // Call the function on page load
// // window.addEventListener('load', togglePaymentOptions);

// // // Function to handle payment option clicks
// // function handlePaymentOptionClick(event) {
// //   // You can add your custom logic here based on the clicked option
// //   // For example, you can perform some action or navigation.
// //   // You can also leave this function empty if you don't need any specific action.
// // }

// // // Add a click event listener to all payment options
// // const paymentOptions = document.querySelectorAll('.payment-option');
// // paymentOptions.forEach((option) => {
// //   option.addEventListener('click', handlePaymentOptionClick);
// // });

// // const sendPaymentButton = document.getElementById('send-payment');
// // const getPaymentLinkButton = document.getElementById('get-payment-link');
// // const phoneNumberInput = document.getElementById('phone-number');

// // // Send POST call on send click
// // sendPaymentButton.addEventListener('click', async () => {
// //   const amount = 599;
// //   const phoneNumber = phoneNumberInput.value;

// //   const response = await fetch('http://localhost:8080/send', {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify({
// //       amount,
// //       phoneNumber
// //     })
// //   });

// //   if (response.ok) {
// //     alert('Payment sent successfully!');
// //   } else {
// //     alert('Failed to send payment.');
// //   }
// // });

// const userAgent = navigator.userAgent.toLowerCase();

// function togglePaymentOptions() {
//   const paytm = document.getElementById('Paytm');
//   const bhim = document.getElementById('Bhim');
//   const paymentOptions = document.querySelector('.payment-methods');

//   if (/iphone|ipad|ipod/.test(userAgent)) {
//     paytm.style.display = 'none';
//     bhim.style.display = 'none';
//   }

//   // if (!/android|iphone|ipad|ipod/.test(userAgent)) {
//   //   paymentOptions.innerHTML = '<p>No payment options available</p>';
//   // }
// }

// window.addEventListener('load', togglePaymentOptions);

// function handlePaymentOptionClick(event) {}

// const paymentOptions = document.querySelectorAll('.payment-option');
// paymentOptions.forEach((option) => {
//   option.addEventListener('click', handlePaymentOptionClick);
// });

// const sendPaymentButton = document.getElementById('send-payment');
// const phoneNumberInput = document.getElementById('phone-number');

// sendPaymentButton.addEventListener('click', async () => {
//   const amount = 599;
//   const phoneNumber = phoneNumberInput.value;

//   const response = await fetch('http://your-dummy-url.com/send', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       amount,
//       phoneNumber
//     })
//   });

//   if (response.ok) {
//     alert('Payment sent successfully!');
//   } else {
//     alert('Failed to send payment.');
//   }
// });
const userAgent = navigator.userAgent.toLowerCase();

function togglePaymentOptions() {
  const paytm = document.getElementById('Paytm');
  const bhim = document.getElementById('Bhim');
  const paymentOptions = document.querySelector('.payment-methods');

  if (/iphone|ipad|ipod/.test(userAgent)) {
    paytm.style.display = 'none';
    bhim.style.display = 'none';
  }

  // if (!/android|iphone|ipad|ipod/.test(userAgent)) {
  //   paymentOptions.innerHTML = '<p>No payment options available</p>';
  // }
}

window.addEventListener('load', togglePaymentOptions);

function handlePaymentOptionClick(event) {
  // Get the UPI name associated with the clicked option
  const upiName = event.currentTarget.getAttribute('data-upi-name');

  // Make a GET request based on the UPI name
  fetch(`http://localhost:8080/${upiName}`)
    .then((response) => {
      if (response.ok) {
        // Handle successful GET request
        return response.text();
      } else {
        // Handle failed GET request
        throw new Error('Failed to fetch UPI data.');
      }
    })
    .then((data) => {
      // Process the data as needed
      console.log(`UPI Data for ${upiName}: ${data}`);
    })
    .catch((error) => {
      // Handle errors
      console.error(error.message);
    });
}

const paymentOptions = document.querySelectorAll('.payment-option');
paymentOptions.forEach((option) => {
  option.addEventListener('click', handlePaymentOptionClick);
});

const sendPaymentButton = document.getElementById('send-payment');
const phoneNumberInput = document.getElementById('phone-number');

sendPaymentButton.addEventListener('click', async () => {
  const amount = 599;
  const phoneNumber = phoneNumberInput.value;

  const response = await fetch('http:(localhost:8080/)', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount,
      phoneNumber
    })
  });

  if (response.ok) {
    alert('Payment sent successfully!');
  } else {
    alert('Failed to send payment.');
  }
});
