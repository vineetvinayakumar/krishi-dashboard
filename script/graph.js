const ivrchannel = document.getElementById("ivrchannelSection");
let ivrchannelSection = new Chart(ivrchannel, {
	type: 'bar',
	data: {
    labels: ["Generic", "Schemes", "News", "Expert Talk", "Feedback"],
    datasets: [
        {
            label: "IVR Channels",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [365, 159, 280, 181, 96, 155, 80],
        }
    ]
	}
});

const topcrops = document.getElementById("topcropSection");
let topcropSection = new Chart(topcrops, {
	type: 'bar',
	data: {
    labels: ["Cotton", "Sugarcane", "Turmeric", "Groundnut", "Sunflower"],
    datasets: [
        {
            label: "Top 5 Crops",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [100, 150, 70, 81, 96],
        }
    ]
	}
});

const farmingType = document.getElementById("farmingTypeSection");
let farmingTypeSection = new Chart(farmingType, {
	type: 'doughnut',
	data: {
    labels: [
        "Organic",
        "Inorganic"
    ],
    datasets: [
        {
            data: [300, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB"
            ]
        }]
	}
});




