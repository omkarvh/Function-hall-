
 
 function handleCall() {
    const phoneNumber = '+918951374619';
    // If user is on mobile, open dialer
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = `tel:${phoneNumber}`;
    } 
    // If on desktop, show popup
    else {
      alert(`📞 Call us at: ${phoneNumber}`);
    }
  }

  //nav bar 
   const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });