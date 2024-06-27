const checkoutButton = document.getElementById("checkout_button");

function paypalCheckoutButton(){
    checkoutButton.innerHTML = `<input type="hidden" name="cmd" value="_ext-enter">
        <form action="https://www.paypal.com/us/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_xclick">
          <input type="hidden" name="business" value="info@candelina.hr">
          <input type="hidden" name="item_name" value="Item Name">
          <input type="hidden" name="currency_code" value="EUR">
          <input type="hidden" name="amount" value="0.01">
          <input type="image" src="http://www.paypal.com/en_US/i/btn/x-click-but01.gif" name="submit" alt="Make payments with PayPal - it's fast, free and secure!">
        </form>`;
    }
    paypalCheckoutButton();