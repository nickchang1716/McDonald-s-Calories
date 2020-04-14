//圓餅圖
$("#pickItems").on("click", () => {
  $("#mcPieCharts").show();
  if (tableIsHidden == true) {
    $("#mcTable").show();
    $("#pickedItem span").remove();
    $("#piePresent svg").remove();
    hideDiv();
    hideIntroduction();
    for (let i = 0; i < drinkInf.length; i++) {
      if (i < coffeeInf.length) {
        let mcTableRow = `
          <tr>
            <td class="unclicked">${breakfastInf[i].name}</td>
            <td class="unclicked">${normalInf[i].name}</td>
            <td class="unclicked">${snackInf[i].name}</td>
            <td class="unclicked">${drinkInf[i].name}</td>
            <td class="unclicked">${coffeeInf[i].name}</td>
          </tr>`;
        $("#mcTable table tbody").append(mcTableRow);
        itemName.push(breakfastInf[i].name);
        itemName.push(normalInf[i].name);
        itemName.push(snackInf[i].name);
        itemName.push(drinkInf[i].name);
        itemName.push(coffeeInf[i].name);
        itemCalories.push(breakfastInf[i].calories);
        itemCalories.push(normalInf[i].calories);
        itemCalories.push(snackInf[i].calories);
        itemCalories.push(drinkInf[i].calories);
        itemCalories.push(coffeeInf[i].calories);
      } else if (i >= coffeeInf.length && i < snackInf.length) {
        let mcTableRow = `
          <tr>
            <td class="unclicked">${breakfastInf[i].name}</td>
            <td class="unclicked">${normalInf[i].name}</td>
            <td class="unclicked">${snackInf[i].name}</td>
            <td class="unclicked">${drinkInf[i].name}</td>
            <td class="unclicked"></td>
          </tr>`;
        $("#mcTable table tbody").append(mcTableRow);
        itemName.push(breakfastInf[i].name);
        itemName.push(normalInf[i].name);
        itemName.push(snackInf[i].name);
        itemName.push(drinkInf[i].name);
        itemCalories.push(breakfastInf[i].calories);
        itemCalories.push(normalInf[i].calories);
        itemCalories.push(snackInf[i].calories);
        itemCalories.push(drinkInf[i].calories);
      } else if (i >= snackInf.length && i < breakfastInf.length) {
        let mcTableRow = `
          <tr>
            <td class="unclicked">${breakfastInf[i].name}</td>
            <td class="unclicked">${normalInf[i].name}</td>
            <td class="unclicked"></td>
            <td class="unclicked">${drinkInf[i].name}</td>
            <td class="unclicked"></td>
          </tr>`;
        $("#mcTable table tbody").append(mcTableRow);
        itemName.push(breakfastInf[i].name);
        itemName.push(normalInf[i].name);
        itemName.push(drinkInf[i].name);
        itemCalories.push(breakfastInf[i].calories);
        itemCalories.push(normalInf[i].calories);
        itemCalories.push(drinkInf[i].calories);
      } else if (i >= breakfastInf.length && i < normalInf.length) {
        let mcTableRow = `
          <tr>
            <td class="unclicked"></td>
            <td class="unclicked">${normalInf[i].name}</td>
            <td class="unclicked"></td>
            <td class="unclicked">${drinkInf[i].name}</td>
            <td class="unclicked"></td>
          </tr>`;
        $("#mcTable table tbody").append(mcTableRow);
        itemName.push(normalInf[i].name);
        itemName.push(drinkInf[i].name);
        itemCalories.push(normalInf[i].calories);
        itemCalories.push(drinkInf[i].calories);
      } else if (i >= normalInf.length && i < drinkInf.length) {
        let mcTableRow = `
          <tr>
            <td class="unclicked"></td>
            <td class="unclicked"></td>
            <td class="unclicked"></td>
            <td class="unclicked">${drinkInf[i].name}</td>
            <td class="unclicked"></td>
          </tr>`;
        $("#mcTable table tbody").append(mcTableRow);
        itemName.push(drinkInf[i].name);
        itemCalories.push(drinkInf[i].calories);
      }
    }
    tableIsHidden = false;
  }
  $(".buttons #reanalyze").remove();
})

//存放點選項目之熱量
let thisCal = [];
let thisItemName = [];
let totalCal = 0;
let color1 = d3.scaleOrdinal(d3.schemeTableau10);
let color2 = d3.scaleOrdinal(d3.schemeSet2);
let pieColorAxis = ``;
$("tbody").on("click", ".unclicked", function() {
  let thisName = $(this).text();
  $("#pickedItem").append(`<span class="tags">${thisName}</span>`);
  for (let i = 0; i < itemName.length; i++) {
    if (itemName[i] == thisName) {
      totalCal += itemCalories[i];
      thisCal.push(itemCalories[i]);
      thisItemName.push(thisName);
      if (thisCal.length > 12) {
        pieColorAxis += `<span style="background-color:${color2(thisItemName.indexOf(thisName)-10)};margin-left:1em;border-radius:100%"> &nbsp;&nbsp;&nbsp;&nbsp;</span><span style="padding-left:.2em"> ${thisName}</span>`;
      } else {
        pieColorAxis += `<span style="background-color:${color1(thisItemName.indexOf(thisName))};margin-left:1em;border-radius:100%"> &nbsp;&nbsp;&nbsp;&nbsp;</span><span style="padding-left:.2em"> ${thisName}</span>`;
      }

    }
  }
  $(this).removeClass("unclicked");
  $(this).addClass("clicked");
})

$(".buttons").on("click", "#reanalyze", function() {
  $("#mcPieCharts").show();
  if (tableIsHidden == true) {
    $("#mcTable").show();
    $("#pickedItem span").remove();
    $("#piePresent svg").remove();
    hideDiv();
    hideIntroduction();
    for (let i = 0; i < drinkInf.length; i++) {
      if (i < coffeeInf.length) {
        let mcTableRow = `
          <tr>
            <td class="unclicked">${breakfastInf[i].name}</td>
            <td class="unclicked">${normalInf[i].name}</td>
            <td class="unclicked">${snackInf[i].name}</td>
            <td class="unclicked">${drinkInf[i].name}</td>
            <td class="unclicked">${coffeeInf[i].name}</td>
          </tr>`;
        $("#mcTable table tbody").append(mcTableRow);
        itemName.push(breakfastInf[i].name);
        itemName.push(normalInf[i].name);
        itemName.push(snackInf[i].name);
        itemName.push(drinkInf[i].name);
        itemName.push(coffeeInf[i].name);
        itemCalories.push(breakfastInf[i].calories);
        itemCalories.push(normalInf[i].calories);
        itemCalories.push(snackInf[i].calories);
        itemCalories.push(drinkInf[i].calories);
        itemCalories.push(coffeeInf[i].calories);
      } else if (i >= coffeeInf.length && i < snackInf.length) {
        let mcTableRow = `
          <tr>
            <td class="unclicked">${breakfastInf[i].name}</td>
            <td class="unclicked">${normalInf[i].name}</td>
            <td class="unclicked">${snackInf[i].name}</td>
            <td class="unclicked">${drinkInf[i].name}</td>
            <td class="unclicked"></td>
          </tr>`;
        $("#mcTable table tbody").append(mcTableRow);
        itemName.push(breakfastInf[i].name);
        itemName.push(normalInf[i].name);
        itemName.push(snackInf[i].name);
        itemName.push(drinkInf[i].name);
        itemCalories.push(breakfastInf[i].calories);
        itemCalories.push(normalInf[i].calories);
        itemCalories.push(snackInf[i].calories);
        itemCalories.push(drinkInf[i].calories);
      } else if (i >= snackInf.length && i < breakfastInf.length) {
        let mcTableRow = `
          <tr>
            <td class="unclicked">${breakfastInf[i].name}</td>
            <td class="unclicked">${normalInf[i].name}</td>
            <td class="unclicked"></td>
            <td class="unclicked">${drinkInf[i].name}</td>
            <td class="unclicked"></td>
          </tr>`;
        $("#mcTable table tbody").append(mcTableRow);
        itemName.push(breakfastInf[i].name);
        itemName.push(normalInf[i].name);
        itemName.push(drinkInf[i].name);
        itemCalories.push(breakfastInf[i].calories);
        itemCalories.push(normalInf[i].calories);
        itemCalories.push(drinkInf[i].calories);
      } else if (i >= breakfastInf.length && i < normalInf.length) {
        let mcTableRow = `
          <tr>
            <td class="unclicked"></td>
            <td class="unclicked">${normalInf[i].name}</td>
            <td class="unclicked"></td>
            <td class="unclicked">${drinkInf[i].name}</td>
            <td class="unclicked"></td>
          </tr>`;
        $("#mcTable table tbody").append(mcTableRow);
        itemName.push(normalInf[i].name);
        itemName.push(drinkInf[i].name);
        itemCalories.push(normalInf[i].calories);
        itemCalories.push(drinkInf[i].calories);
      } else if (i >= normalInf.length && i < drinkInf.length) {
        let mcTableRow = `
          <tr>
            <td class="unclicked"></td>
            <td class="unclicked"></td>
            <td class="unclicked"></td>
            <td class="unclicked">${drinkInf[i].name}</td>
            <td class="unclicked"></td>
          </tr>`;
        $("#mcTable table tbody").append(mcTableRow);
        itemName.push(drinkInf[i].name);
        itemCalories.push(drinkInf[i].calories);
      }
    }
    tableIsHidden = false;
  }
  $(".buttons #reanalyze").remove();
})
// $("#pickedItem").on("click", ".tags", function() {
//   for(let i = 0; i < itemName.length; i++){
//     if($(this).text() == itemName[i]){
//       $("#mcTable table tbody tr td")
//     }
//   }
//   $(this).remove()
// })
//繪製圓餅圖
//let pieColor = ["red", "orange", "yellow", "green", "blue", "purple"]
$("#analyze").on("click", () => {
  $("#piePresent").hide();
  $("#piePresent svg").remove();
  $("#pieAxis span").remove();
  $("#pieAxis").append(pieColorAxis);
  $(".buttons").append("<button id='reanalyze' class='btn btn-info'>重新選取</button>")
  if (tableIsHidden == false) {
    $("#mcTable").hide();
    $("tbody tr").remove();
    $("#piePresent").show();
    tableIsHidden = true;
  }
  const width = 600,
    height = width
  const pieSvg = d3.select("#piePresent").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", `translate(${width / 2}, ${height / 2})`);
  //const arc = d3.arc().innerRadius(width / 2 - 30).outerRadius(width / 2);
  //const pie = d3.pie().value(d => d);
  const pieG = pieSvg.append("g").attr("text", "text-group");
  let tip = d3.tip().attr('class', 'd3-tip').html((d, i) => `${thisItemName[i]}: ${Math.floor((thisCal[i]/totalCal)*100)}% (${thisCal[i]}kcal)`);
  let radius = Math.min(width, height) / 2.5;
  let arc = d3.arc()
    .outerRadius(radius)
    .innerRadius(radius - 30);
  let pie = d3.pie()
    .sort(null)
    .startAngle(1.1 * Math.PI)
    .endAngle(3.1 * Math.PI)
    .value(d => d);

  pieSvg.call(tip);
  let g = pieSvg.selectAll(".arc")
    .data(pie(thisCal))
    .enter().append("g")
    .attr("class", "arc")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);

  g.append("path")
    .attr('fill', (d, i) => {
      if (i > 12) {
        return color2(i - 10);
      } else {
        return color1(i);
      }
    })
    .transition()
    .duration(500)
    .attrTween('d', (d) => {
      let i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
      return function(t) {
        d.endAngle = i(t);
        return arc(d);
      }
    });
  pieG.append('text')
    .attr('class', 'value-text')
    .text(`總熱量: ${totalCal} kcal`)
    .attr('text-anchor', 'middle')
    .attr('dy', '.6em')
    .attr("font-size", "3em")

  $("#piePresent").show();
})


//早餐
$("#selectBreakfast").on("click", () => {
  hideDiv();
  hideIntroduction();
  $("#breakfastOptions").append(colorAxis);

  const s1 = d3.select("#breakfastOptions").append("svg").attr("width", "75vw").attr("height", "90vh");
  const g1 = s1.selectAll("g").data(breakfastInf).enter().append("g");
  const scale1 = d3.scaleLinear().domain([0, 800]).range([0, 800]);

  g1.append('rect')
    .attr('x', 180)
    .attr('y', (item, i) => i * 30)
    .attr('width', 0)
    .attr('height', 25)
    .style('fill', (item) => {
      if (item.calories > 300 && item.calories <= 500) {
        return "#ED784A";
      } else if (item.calories > 500) {
        return "#C73E3A";
      } else {
        return "#91B493";
      }
    })
    .transition()
    .duration(1000)
    .attr('width', (item) => {
      return item.calories;
    });

  g1.append('text')
    .text((item) => item.name)
    .attr("x", 0)
    .attr('y', (item, i) => i * 30 + 18)
    .style('fill', 'black')
    .style('font-size', '18px')
  g1.append('text')
    .text((item) => {
      return 0;
    })
    .attr("x", 183)
    .attr('y', (item, i) => i * 30 + 18)
    .style('fill', 'black')
    .style('font-size', '18px')
    .transition()
    .duration(1000)
    .attr("x", (item) => item.calories + 183)
    .tween('number', (item) => {
      var i = d3.interpolateRound(0, item.calories);
      return function(t) {
        this.textContent = i(t)
      };
    });

  const axis1 = d3
    .axisBottom(scale1)
    .ticks(10)
    .tickFormat(item => item + 'kcal');
  let axis1Y = breakfastInf.length * 30 + 18;
  s1.append('g').call(axis1).attr('transform', `translate(180,${axis1Y})`);
  $("#breakfastOptions").show("slow");
})

//一般主餐
$("#selectNormal").on("click", () => {
  hideDiv();
  hideIntroduction();
  $("#normalOptions").append(colorAxis);

  const s2 = d3.select("#normalOptions").append("svg").attr("width", "75vw").attr("height", "130vh");
  const g2 = s2.selectAll("g").data(normalInf).enter().append("g");
  const scale2 = d3.scaleLinear().domain([0, 600]).range([0, 600]);
  g2.append('rect')
    .attr('x', 180)
    .attr('y', (item, i) => i * 30)
    .attr('width', 0)
    .attr('height', 25)
    .style('fill', (item) => {
      if (item.calories > 300 && item.calories <= 500) {
        return "#ED784A";
      } else if (item.calories > 500) {
        return "#C73E3A";
      } else {
        return "#91B493";
      }
    }).transition()
    .duration(1000)
    .attr('width', (item) => {
      return item.calories;
    });
  g2.append('text')
    .text((item) => item.name)
    .attr("x", 0)
    .attr('y', (item, i) => i * 30 + 18)
    .style('fill', 'black')
    .style('font-size', '18px')
  g2.append('text')
    .text((item) => {
      return 0;
    })
    .attr("x", 183)
    .attr('y', (item, i) => i * 30 + 18)
    .style('fill', 'black')
    .style('font-size', '18px')
    .transition()
    .duration(1000)
    .attr("x", (item) => item.calories + 183)
    .tween('number', (item) => {
      var i = d3.interpolateRound(0, item.calories);
      return function(t) {
        this.textContent = i(t)
      };
    });
  const axis2 = d3
    .axisBottom(scale2)
    .ticks(6)
    .tickFormat(item => item + 'kcal');
  let axis2Y = normalInf.length * 30 + 18;
  s2.append('g').call(axis2).attr('transform', `translate(180,${axis2Y})`);
  $("#normalOptions").show("slow");
})

//點心
$("#selectSnack").on("click", () => {
  hideDiv();
  hideIntroduction();
  $("#snackOptions").append(colorAxis);

  const s3 = d3.select("#snackOptions").append("svg").attr("width", "75vw").attr("height", "80vh");
  const g3 = s3.selectAll("g").data(snackInf).enter().append("g");
  const scale3 = d3.scaleLinear().domain([0, 400]).range([0, 400]);
  g3.append('rect')
    .attr('x', 180)
    .attr('y', (item, i) => i * 30)
    .attr('width', 0)
    .attr('height', 25)
    .style('fill', (item) => {
      if (item.calories > 300 && item.calories <= 500) {
        return "#ED784A";
      } else if (item.calories > 500) {
        return "#C73E3A";
      } else {
        return "#91B493";
      }
    }).transition()
    .duration(1000)
    .attr('width', (item) => {
      return item.calories;
    });
  g3.append('text')
    .text((item) => item.name)
    .attr("x", 0)
    .attr('y', (item, i) => i * 30 + 18)
    .style('fill', 'black')
    .style('font-size', '18px')
  g3.append('text')
    .text((item) => {
      return 0;
    })
    .attr("x", 183)
    .attr('y', (item, i) => i * 30 + 18)
    .style('fill', 'black')
    .style('font-size', '18px')
    .transition()
    .duration(1000)
    .attr("x", (item) => item.calories + 183)
    .tween('number', (item) => {
      var i = d3.interpolateRound(0, item.calories);
      return function(t) {
        this.textContent = i(t)
      };
    });
  const axis3 = d3
    .axisBottom(scale3)
    .ticks(4)
    .tickFormat(item => item + 'kcal');
  let axis3Y = snackInf.length * 30 + 18;
  s3.append('g').call(axis3).attr('transform', `translate(180,${axis3Y})`);
  $("#snackOptions").show("slow");
})

//飲料
$("#selectDrink").on("click", () => {
  hideDiv();
  hideIntroduction();
  $("#drinkOptions").append(colorAxis);

  const s4 = d3.select("#drinkOptions").append("svg").attr("width", "75vw").attr("height", "140vh");
  const g4 = s4.selectAll("g").data(drinkInf).enter().append("g");
  const scale4 = d3.scaleLinear().domain([0, 500]).range([0, 500]);
  g4.append('rect')
    .attr('x', 250)
    .attr('y', (item, i) => i * 30)
    .attr('width', 0)
    .attr('height', 25)
    .style('fill', (item) => {
      if (item.calories > 300 && item.calories <= 500) {
        return "#ED784A";
      } else if (item.calories > 500) {
        return "#C73E3A";
      } else {
        return "#91B493";
      }
    }).transition()
    .duration(1000)
    .attr('width', (item) => {
      return item.calories;
    });
  g4.append('text')
    .text((item) => item.name)
    .attr("x", 0)
    .attr('y', (item, i) => i * 30 + 18)
    .style('fill', 'black')
    .style('font-size', '18px')
  g4.append('text')
    .text((item) => {
      return 0;
    })
    .attr("x", 253)
    .attr('y', (item, i) => i * 30 + 18)
    .style('fill', 'black')
    .style('font-size', '18px')
    .transition()
    .duration(1000)
    .attr("x", (item) => item.calories + 253)
    .tween('number', (item) => {
      var i = d3.interpolateRound(0, item.calories);
      return function(t) {
        this.textContent = i(t)
      };
    });
  const axis4 = d3
    .axisBottom(scale4)
    .ticks(5)
    .tickFormat(item => item + 'kcal');
  let axis4Y = drinkInf.length * 30 + 18;
  s4.append('g').call(axis4).attr('transform', `translate(250,${axis4Y})`);
  $("#drinkOptions").show("slow");
})

//咖啡
$("#selectCoffee").on("click", () => {
  hideDiv();
  hideIntroduction();
  $("#coffeeOptions").append(colorAxis);

  const s5 = d3.select("#coffeeOptions").append("svg").attr("width", "75vw").attr("height", "70vh");
  const g5 = s5.selectAll("g").data(coffeeInf).enter().append("g");
  const scale5 = d3.scaleLinear().domain([0, 300]).range([0, 300]);
  g5.append('rect')
    .attr('x', 180)
    .attr('y', (item, i) => i * 30)
    .attr('width', 0)
    .attr('height', 25)
    .style('fill', (item) => {
      if (item.calories > 300 && item.calories <= 500) {
        return "#ED784A";
      } else if (item.calories > 500) {
        return "#C73E3A";
      } else {
        return "#91B493";
      }
    }).transition()
    .duration(1000)
    .attr('width', (item) => {
      return item.calories;
    });
  g5.append('text')
    .text((item) => item.name)
    .attr("x", 0)
    .attr('y', (item, i) => i * 30 + 18)
    .style('fill', 'black')
    .style('font-size', '18px')
  g5.append('text')
    .text((item) => {
      return 0;
    })
    .attr("x", 183)
    .attr('y', (item, i) => i * 30 + 18)
    .style('fill', 'black')
    .style('font-size', '18px')
    .transition()
    .duration(1000)
    .attr("x", (item) => item.calories + 183)
    .tween('number', (item) => {
      var i = d3.interpolateRound(0, item.calories);
      return function(t) {
        this.textContent = i(t)
      };
    });
  const axis5 = d3
    .axisBottom(scale5)
    .ticks(3)
    .tickFormat(item => item + 'kcal');
  let axis5Y = coffeeInf.length * 30 + 18;
  s5.append('g').call(axis5).attr('transform', `translate(180,${axis5Y})`);

  $("#coffeeOptions").show("slow");
})