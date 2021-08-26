//Table
(function() {
    $(".monitor .tabs").on("click", "a", function() {
        $(this).addClass('active').siblings().removeClass('active')

        $(".monitor .content").eq($(this).index()).show().siblings(".content").hide()

    })
})();

//pie chart  chart drawing
(function() {
    let piechart = echarts.init(document.querySelector(".pie"))
    let option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            color: [
                "#006cff",
                "#60cda0",
                "#ed8884",
                "#ff9f7f",
                "#0096ff",
                "#9fe6b8",
                "#32c5e9",
                "#1d9dff"
            ]
        },
        series: [{
            name: 'Point Statistical',
            type: 'pie',
            radius: ['10%', '70%'], //inner and outter circle radius
            center: ['50%', '50%'],
            roseType: 'radius',
            data: [
                { value: 20, name: "Yunnan" },
                { value: 26, name: "Beijing" },
                { value: 24, name: "Shandong" },
                { value: 25, name: "Heibei" },
                { value: 20, name: "Jiangsu" },
                { value: 25, name: "Zhejiang" },
                { value: 30, name: "Sichuang" },
                { value: 42, name: "Hubei" }
            ],
            label: {
                fontSize: 10
            },
            labelLine: {
                // 连接到图形的线长度
                length: 0,
                // 连接到文字的线长度
                length2: 0
            }
        }]
    };
    option && piechart.setOption(option);

    window.addEventListener('resize', function() {
        piechart.resize()
    })
})();

//Bar chart drawing
(function() {
    //data can be an object then can set style
    let item = {
        name: "",
        value: 1200,
        itemStyle: {
            color: "#254065"
        },
        emphasis: {
            itemStyle: {
                color: "#254065"
            },
        },
        //hide the tooltip when hover
        tooltip: {
            extraCssText: "opacity:0"
        }
    }
    let barchart = echarts.init(document.querySelector(".bar"))
    let option = {
        color: new echarts.graphic.LinearGradient(
            // color change between (x1,y1) to (x2,y2) c
            0,
            0,
            0,
            1, [
                { offset: 0, color: "#00fffb" }, // 0 start color
                { offset: 1, color: "#0061ce" } // 1 end color
            ]
        ),
        tooltip: {
            trigger: 'item'
        },
        grid: {
            left: "0%",
            right: "3%",
            bottom: "3%",
            top: "3%",
            //  when left is 0 , show label or not, which will handle label not let it overflow
            containLabel: true,
            // show axis grid 
            show: true,
            //grid border color
            borderColor: "rgba(0, 240, 255, 0.3)"
        },
        xAxis: {
            type: 'category',
            axisTick: {
                alignWithLabel: false,
                show: false,

            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                }
            },
            data: ["SH",
                "GZ",
                "BJ",
                "SZ",
                "HF",
                "",
                ".....",
                "",
                "HZ",
                "XM",
                "JN",
                "CD",
                "CQ"
            ]
        },
        yAxis: {
            type: 'value',
            axisTick: {
                alignWithLabel: false,
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                }
            },
        },
        series: [{
            name: "Access",
            type: "bar",
            barWidth: "60%",
            data: [
                2100,
                1900,
                1700,
                1560,
                1400,
                item,
                item,
                item,
                900,
                750,
                600,
                480,
                240
            ]
        }]
    };
    option && barchart.setOption(option);
    window.addEventListener('resize', function() {
        barchart.resize()
    })
})();


(function() {
    //data 
    let data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };

    let linechart = echarts.init(document.querySelector('.line'))
    let option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: "axis"
        },
        legend: {
            // len to right
            right: "10%",
            textStyle: {
                color: "#4c9bfd"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            //clear inner padding
            boundaryGap: false,
            data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            // hide x axis 
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: "Expect",
                type: "line",
                stack: "Total",
                // smooth the line 
                smooth: true,
                data: data.year[0]
            },
            {
                name: "Actual",
                type: "line",
                stack: "Total",
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    option && linechart.setOption(option)
        //tab change actions
    $(".sales .caption").on("click", "a", function() {

        //as' index start from 1 because before as there is another element
        idx = $(this).index() - 1
            //change bg of clicked a 
        $(this).addClass('active').siblings("a").removeClass('active')


        //get related data according to a's data-type attribute
        let arr = data[this.dataset.type]
        option.series[0].data = arr[0]
        option.series[1].data = arr[1]

        //set new options to line chart
        linechart.setOption(option)
    })

    //set time to change tab
    let idx = 0
    let as = $(".sales .caption a")
    let timer = setInterval(() => {
        idx++
        if (idx >= as.length) {
            idx = 0
        }
        as.eq(idx).click()
    }, 3000);

    $(".sales").hover(function() {
        clearInterval(timer)
    }, function() {
        clearInterval(timer)
        timer = setInterval(() => {
            idx++
            if (idx >= as.length) {
                idx = 0
            }
            as.eq(idx).click()
        }, 3000);
    })
    window.addEventListener('resize', function() {
        resizeChart(linechart)
    })
})();

(function() {
    let radar = echarts.init(document.querySelector('.radar'))
    let option = {
        tooltip: {
            show: true,
            // tooltip position
            position: ["60%", "10%"],
            textStyle: {
                fontSize: 7
            }
        },
        radar: {
            indicator: [
                { name: "Airpot", max: 100 },
                { name: "SC", max: 100 },
                { name: "Train", max: 100 },
                { name: "Bus", max: 100 },
                { name: "Tram", max: 100 }
            ],
            // change size of radar, which is the outtest circle radius
            radius: "60%",
            shape: "circle",
            // split circle numbers
            splitNumber: 4,
            name: {
                // text style
                textStyle: {
                    color: "#4c9bfd",
                    fontSize: 10
                }
            },
            // split circle line style
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255, 0.5)"
                }
            },
            splitArea: {
                show: false
            },
            // axis line style, lines in the middle of the circle
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        series: [{
            name: "BJ",
            type: "radar",
            // filled area line style
            lineStyle: {
                normal: {
                    color: "#fff",
                    width: 1,
                    opacity: 0.5
                }
            },
            data: [
                [90, 19, 56, 11, 34]
            ],
            // set change point
            symbol: "circle",
            // change point size
            symbolSize: 5,
            // change point style
            itemStyle: {
                color: "#fff"
            },
            // show data along with circle
            label: {
                show: true,
                fontSize: 10
            },
            // filled area in the circle
            areaStyle: {
                color: "rgba(238, 197, 102, 0.6)"
            }
        }]
    };

    option && radar.setOption(option)
    resizeChart(radar)

})();

(function() {
    let piechart = echarts.init(document.querySelector(".gauge"))
    let option = {
        series: [{
            name: "Sale Progress",
            type: "pie",
            radius: ["130%", "150%"],
            // move position
            center: ["48%", "80%"],
            // avoidLabelOverlap: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            // set start angle , not rotate the chart . default start angle is 90 deg
            startAngle: 180,
            // no zoom effect when mouse hover
            hoverOffset: 0,
            data: [{
                    value: 100,
                    itemStyle: {
                        // color gradient
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1, [
                                { offset: 0, color: "#00c9e0" },
                                { offset: 1, color: "#005fc1" }
                            ]
                        )
                    }
                },
                {
                    value: 100,
                    itemStyle: {
                        color: "#12274d"
                    }
                },
                {
                    value: 200,
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        }]
    }

    piechart.setOption(option)
})();

(function() {
    let hotData = [{
            city: "BeiJ",
            sales: "25, 179",
            flag: true, // increase or deacrease
            brands: [
                //  品牌种类数据
                { name: "Keaiduo", num: "9,086", flag: true },
                { name: "Wahaha", num: "8,341", flag: true },
                { name: "Xizhilang", num: "7,407", flag: false },
                { name: "Baxi", num: "6,080", flag: false },
                { name: "Xiaoyangren", num: "6,724", flag: false },
                { name: "Haoduoyu", num: "2,170", flag: true }
            ]
        },
        {
            city: "HeiB",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "Keaiduo", num: "3,457", flag: false },
                { name: "Wahaha", num: "2,124", flag: true },
                { name: "Xizhilang", num: "8,907", flag: false },
                { name: "Baxi", num: "6,080", flag: true },
                { name: "Xiaoyangren", num: "1,724", flag: false },
                { name: "Haoduoyu", num: "1,170", flag: false }
            ]
        },
        {
            city: "ShaH",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "Keaiduo", num: "2,345", flag: true },
                { name: "Wahaha", num: "7,109", flag: true },
                { name: "Xizhilang", num: "3,701", flag: false },
                { name: "Baxi", num: "6,080", flag: false },
                { name: "Xiaoyangren", num: "2,724", flag: false },
                { name: "Haoduoyu", num: "2,998", flag: true }
            ]
        },
        {
            city: "JiaS",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "Keaiduo", num: "2,156", flag: false },
                { name: "Wahaha", num: "2,456", flag: true },
                { name: "Xizhilang", num: "9,737", flag: true },
                { name: "Baxi", num: "2,080", flag: true },
                { name: "Xiaoyangren", num: "8,724", flag: true },
                { name: "Haoduoyu", num: "1,770", flag: false }
            ]
        },
        {
            city: "ShD",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "Keaiduo", num: "9,567", flag: true },
                { name: "Wahaha", num: "2,345", flag: false },
                { name: "Xizhilang", num: "9,037", flag: false },
                { name: "Baxi", num: "1,080", flag: true },
                { name: "Xiaoyangren", num: "4,724", flag: false },
                { name: "Haoduoyu", num: "9,999", flag: true }
            ]
        }
    ];


    //load data to page
    let supHTML = ""
    $(hotData).each(function(i, ele) {
        supHTML += `<li><span>${ele.city}</span><span>${ele.sales}<s class=${ele.flag?"icon-up":"icon-down"}></s></span></li>`
    })
    $(".sup").html(supHTML)

    //active the li when mouseenter and show related data
    function render(that) {
        that.addClass('active').siblings("li").removeClass("active")

        // console.log(hotData[$(this).index()].brands);
        let subHTML = ""
        $(hotData[that.index()].brands).each(function(i, ele) {
            subHTML += `<li><span>${ele.name}</span><span>${ele.num}<s class=${ele.flag?"icon-up":"icon-down"}></s></span></li>`
        })
        $(".sub").html(subHTML)
    }

    let idx = 0
    $('.province .sup').on("mouseenter", "li", function() {
        idx = $(this).index()
        render($(this))
    })

    //let the first li as default display
    let lis = $('.province .sup li')
    lis.eq(0).mouseenter()


    let timer = setInterval(() => {
        idx++
        if (idx >= lis.length) {
            idx = 0
        }
        render(lis.eq(idx))
    }, 2000);

    $('.province .sup').hover(function() {
        clearInterval(timer)
    }, function() {
        clearInterval(timer)
        timer = setInterval(() => {
            idx++
            if (idx >= lis.length) {
                idx = 0
            }
            render(lis.eq(idx))
        }, 2000);
    })
})();



function resizeChart(chart) {
    window.addEventListener('resize', function() {
        chart.resize()
    })
}