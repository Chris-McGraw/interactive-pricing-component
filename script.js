/* ------------------------- FUNCTION DECLARATIONS ------------------------- */
function handleSliderChange(value) {
  let pageViews = document.getElementById("pageviews");
  let price = document.getElementById("price");

  switch(value) {
    case "2":
      pageViews.innerHTML = "1M Pageviews";
      price.innerHTML = "$36.00<span id='price-per-span'> / month</span>";
      break;
    case "1":
      pageViews.innerHTML = "500K Pageviews";
      price.innerHTML = "$24.00<span id='price-per-span'> / month</span>";
      break;
    case "0":
      pageViews.innerHTML = "100K Pageviews";
      price.innerHTML = "$16.00<span id='price-per-span'> / month</span>";
      break;
    case "-1":
      pageViews.innerHTML = "50K Pageviews";
      price.innerHTML = "$12.00<span id='price-per-span'> / month</span>";
      break;
    case "-2":
      pageViews.innerHTML = "10K Pageviews";
      price.innerHTML = "$8.00<span id='price-per-span'> / month</span>";
      break;
    default:
      break;
  }
}



/* ----------------------------- EVENT HANDLERS ----------------------------- */
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("price-slider").oninput = function() {
    handleSliderChange(this.value);

    var fillTrackPct = (this.value - this.min) / (this.max - this.min) * 100;

    this.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) "
                            + fillTrackPct + "%, hsl(224, 65%, 95%) " + fillTrackPct + "%, hsl(224, 65%, 95%) 100%)";
  };

});
