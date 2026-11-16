/* BOYUE PACK — GA4 conversion tracking (whatsapp / email / inquiry form) */
(function () {
  function send(name, params) {
    try {
      if (typeof gtag !== 'function') return;
      params = params || {};
      params.transport_type = 'beacon';
      gtag('event', name, params);
    } catch (e) {}
  }

  document.addEventListener('click', function (ev) {
    var el = ev.target;
    var a = null;
    while (el && el !== document) {
      if (el.tagName === 'A') { a = el; break; }
      el = el.parentNode;
    }
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('wa.me') > -1 || href.indexOf('api.whatsapp.com') > -1) {
      send('whatsapp_click', { page_path: location.pathname, source: 'floating_or_page' });
    } else if (href.indexOf('mailto:') > -1) {
      send('email_click', { page_path: location.pathname });
    }
  }, true);

  var forms = document.querySelectorAll('form');
  for (var i = 0; i < forms.length; i++) {
    (function (form) {
      form.addEventListener('submit', function (ev) {
        if (form.getAttribute('data-ga-tracked') === '1') return;
        ev.preventDefault();
        form.setAttribute('data-ga-tracked', '1');
        var sent = false;
        var proceed = function () {
          if (sent) return;
          sent = true;
          form.submit();
        };
        try {
          gtag('event', 'form_submit', {
            form_name: 'inquiry',
            page_path: location.pathname,
            transport_type: 'beacon',
            event_callback: proceed,
            event_timeout: 800
          });
          setTimeout(proceed, 600);
        } catch (e) {
          proceed();
        }
      });
    })(forms[i]);
  }

  try {
    if (location.search.indexOf('utm_') > -1) {
      send('utm_landing', { page_path: location.pathname });
    }
  } catch (e) {}
})();
