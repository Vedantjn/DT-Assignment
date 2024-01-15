// chart1.js
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("bubbleChart").getContext("2d");
  
    var data = {
      datasets: [
        {
          label: "News and Data Flow",
          data: [
            { x: 3, y: 65, r: 5 },
            { x: 13, y: 50, r: 10 },
            { x: 17, y: 65, r: 15 },
            { x: 26, y: 90, r: 20 },
            { x: 31, y: 80, r: 25 },
            { x: 32, y: 65, r: 30 },
            { x: 33, y: 50, r: 35 },
          ],
          backgroundColor: [
            "rgba(245, 213, 39, 0.8)",
            "rgba(39, 93, 245, 0.8)",
            "rgba(245, 39, 39, 0.8)",
            "rgba(39, 93, 245, 1)",
            "rgba(196, 39, 245, 0.8)",
            "rgba(39, 191, 245, 0.8)",
            "rgba(46, 245, 39, 0.8)",
            
        ], 
        },
      ],
    };
  
    // Chart configuration options
    var options = {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          min: 0,
          max: 60,
          stepSize: 5,
        },
        y: {
          type: "linear",
          position: "left",
          min: 0,
          max: 100,
          stepSize: 10,
        },
      },
    };
  
    // Create the bubble chart
    var myBubbleChart = new Chart(ctx, {
      type: "bubble",
      data: data,
      options: options,
    });
  });
  