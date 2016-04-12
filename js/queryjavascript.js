/***********************生成报表****************************/
$(document).ready(function() {
			$("#chaxun").click(function(event) {
				$("#sale").val("销量");
				var name=$("#baobiao3").val();
				var year=$("#baobiao1").val();
				var month=$("#baobiao2").val();			
				$.get('query.php?name='+name+'&year='+year, function(data) {
					if (data=='[]') {
						$("#result").html('没有查询到任何结果');
					} else if (data=='error') {
						alert('Error!');
					} else {
						$("#result").html('');
						var res = JSON.parse(data);
						var table = $("<table class='table querytable'></table>");
						var thead =$("<thead><tr><th style='text-align:center !important'>年份</th><th style='text-align:center !important'>月份</th><th style='text-align:center !important'>销量</th></tr></thead>");
						var tbody = $('<tbody></tbody>');
						var newmonth=month*1+2;
						$.each(res, function(index, val) {
							if (newmonth!=2) {
								tbody.append('<tr><td>'+val.year+'</td>'+'<td>'+month+'</td>'+'<td>'+val[newmonth]+'</td></tr>');
							}else if(newmonth==2){
								var sum=0;
								for (var i = 3; i < 15; i++) {
									tbody.append('<tr><td>'+val.year+'</td>'+'<td>'+(i-2)+'</td>'+'<td>'+val[i]+'</td></tr>');
									sum=sum*1+val[i]*1;
								}
								tbody.append('<tr><td style="font-weight:bold">总计</td><td></td><td style="font-weight:bold">'+sum+'</td></tr>');
							}
						});
						table.append(thead);
						table.append(tbody);
						$("#result").append(table);
						}
				});
			});
 		});
/***********************生成报表****************************/
var barChartData;
var myLine;
function Addchart(){
	barChartData = {
		labels : ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
		datasets : [
						{
							fillColor : "rgba(220,220,220,0.5)",
							strokeColor : "rgba(220,220,220,1)",
							data : [0,0,0,0,0,0,0,0,0,0,0,0]
						}
				   ]
				}
		myLine = new Chart(document.getElementById("canvas").getContext("2d")).Bar(barChartData);
	}

$(document).ready(function() {
	Addchart();
	$("#reportQuery").click(function(event) {
		$("#sale").val("销量");
		var name=$("#baobiao4").val();
		var year=$("#baobiao5").val();
		$.get('query.php?name='+name+'&year='+year, function(data) {
			if (data=='[]') {
					$("#result").html('没有查询到任何结果');
				}else if (data=='error') {
					alert('Error!');
				}else{
					var res = JSON.parse(data);
						myLine.datasets[0].bars[0].value = res[0].month01;
						myLine.datasets[0].bars[1].value = res[0].month02;
						myLine.datasets[0].bars[2].value = res[0].month03;
						myLine.datasets[0].bars[3].value = res[0].month04;
						myLine.datasets[0].bars[4].value = res[0].month05;
						myLine.datasets[0].bars[5].value = res[0].month06;
						myLine.datasets[0].bars[6].value = res[0].month07;
						myLine.datasets[0].bars[7].value = res[0].month08;
						myLine.datasets[0].bars[8].value = res[0].month09;
						myLine.datasets[0].bars[9].value = res[0].month10;
						myLine.datasets[0].bars[10].value = res[0].month11;
						myLine.datasets[0].bars[11].value = res[0].month12;
						myLine.update();		
				}
		});		//get
	});		//click
});    //ready

/***********************修改数据****************************/
$(document).ready(function() {
	$("#sale").click(function(event) {
		$("#sale").val("");
	});
	$("#xiugai").click(function(event) {
		$("#result").empty();
		var name=$("#baobiao3").val();
		var year=$("#baobiao1").val();
		var month=$("#baobiao2").val();	
		var sale =$("#sale").val();
		 $.post('insert.php?', 
		 	{
		 		 product:$("#baobiao3").val(),
		 	 	 year:$("#baobiao1").val(),
		 	 	 month:$("#baobiao2").val(),	
		 	 	 sale:$("#sale").val()
			 }, 
			function(data, textStatus, xhr) {
				$("#result").html('');
				var txtreturn =	$("<p class='txtreturn'>修改成功</p>")
				$("#result").append(txtreturn);
		});
	});
});

/***********************删除数据****************************/
$(document).ready(function() {
	$("#shanchu").click(function(event) {
		$("#sale").val("销量");
		$("#result").empty();
		var name=$("#baobiao3").val();
		var year=$("#baobiao1").val();
		var month=$("#baobiao2").val();
		$.post('delete.php', 
			{   name: $("#baobiao3").val(),
	 	 		year: $("#baobiao1").val(),
	 	 		month:$("#baobiao2").val(),	
			}, 
			function(data, textStatus, xhr) {
			$("#result").html('');
			var txtreturn =	$("<p class='txtreturn'>删除成功</p>")
			$("#result").append(txtreturn);		
		});
	});
});