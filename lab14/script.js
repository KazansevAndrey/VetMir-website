
var ctx = document.getElementById("myChart");
        Chart.defaults.font.size = 18;
        var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: ['Болезни кожи', 'Заболевания желудочно-кишечного тракта', 'Респираторные заболевания', 'Заболевания опорно-двигательной системы', 'Опухоли и новообразования', 'Заболевания мочевыводительной системы', 'Паразитарные инфекции'],
        descr:[''],
        datasets: [{
            
            backgroundColor: [
                'red',   
                'blue',   
                'green',  
                'black',
                'violet',
                'yellow',
                'brown' 
                
            ],
            data: [25, 20, 15, 10, 8, 7, 5],
            
        }]
        },
        options: {
            borderWidth:10,
            borderRadius:3,
            plugins:{
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.formattedValue + '%';
                            return label;
                        }
                    },
                    displayColors: false, // Отключает отображение цветовых иконок
                    
                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 30
                        }
                    },
                    display: false
                },
            },
        },
        
    })