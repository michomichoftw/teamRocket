/*
var data = '[{"Region":5,"SRA":38,"Area":"Alpine","Year":2012,"Households":5347,"Median Household Income":"$91041.00"},{"Region":6,"SRA":63,"Area":"Anza-Borrego","Year":2012,"Households":1411,"Median Household Income":"$49948.00"},{"Region":1,"SRA":41,"Area":"Carlsbad","Year":2012,"Households":45184,"Median Household Income":"$89108.00"},{"Region":3,"SRA":1,"Area":"Central San Diego","Year":2012,"Households":73644,"Median Household Income":"$52607.00"},{"Region":4,"SRA":21,"Area":"Chula Vista","Year":2012,"Households":36812,"Median Household Income":"$47821.00"},{"Region":2,"SRA":11,"Area":"Coastal","Year":2012,"Households":34553,"Median Household Income":"$85455.00"},{"Region":4,"SRA":3,"Area":"Coronado","Year":2012,"Households":8413,"Median Household Income":"$99889.00"},{"Region":2,"SRA":13,"Area":"Del Mar-Mira Mesa","Year":2012,"Households":53963,"Median Household Income":"$115528.00"},{"Region":5,"SRA":34,"Area":"El Cajon","Year":2012,"Households":41285,"Median Household Income":"$55429.00"},{"Region":2,"SRA":17,"Area":"Elliott-Navajo","Year":2012,"Households":34898,"Median Household Income":"$83438.00"},{"Region":6,"SRA":50,"Area":"Escondido","Year":2012,"Households":50862,"Median Household Income":"$61751.00"},{"Region":6,"SRA":55,"Area":"Fallbrook","Year":2012,"Households":17235,"Median Household Income":"$72011.00"},{"Region":5,"SRA":37,"Area":"Harbison-Crest","Year":2012,"Households":5428,"Median Household Income":"$83290.00"},{"Region":5,"SRA":30,"Area":"Jamul","Year":2012,"Households":4674,"Median Household Income":"$121168.00"},{"Region":2,"SRA":10,"Area":"Kearny Mesa","Year":2012,"Households":59869,"Median Household Income":"$68676.00"},{"Region":5,"SRA":33,"Area":"La Mesa","Year":2012,"Households":24423,"Median Household Income":"$60838.00"},{"Region":5,"SRA":61,"Area":"Laguna-Pine Valley","Year":2012,"Households":1771,"Median Household Income":"$69316.00"},{"Region":5,"SRA":36,"Area":"Lakeside","Year":2012,"Households":18952,"Median Household Income":"$71155.00"},{"Region":5,"SRA":32,"Area":"Lemon Grove","Year":2012,"Households":9513,"Median Household Income":"$60434.00"},{"Region":3,"SRA":6,"Area":"Mid City","Year":2012,"Households":55532,"Median Household Income":"$45873.00"},{"Region":2,"SRA":16,"Area":"Miramar","Year":2012,"Households":525,"Median Household Income":"$45498.00"},{"Region":5,"SRA":62,"Area":"Mountain Empire","Year":2012,"Households":2121,"Median Household Income":"$59014.00"},{"Region":6,"SRA":14,"Area":"North San Diego","Year":2012,"Households":39040,"Median Household Income":"$104474.00"},{"Region":4,"SRA":4,"Area":"National City","Year":2012,"Households":15299,"Median Household Income":"$41936.00"},{"Region":1,"SRA":42,"Area":"Oceanside","Year":2012,"Households":54148,"Median Household Income":"$70503.00"},{"Region":6,"SRA":60,"Area":"Palomar-Julian","Year":2012,"Households":2266,"Median Household Income":"$57946.00"},{"Region":6,"SRA":54,"Area":"Pauma","Year":2012,"Households":2187,"Median Household Income":"$83094.00"},{"Region":1,"SRA":43,"Area":"Pendleton","Year":2012,"Households":6659,"Median Household Income":"$52692.00"},{"Region":2,"SRA":2,"Area":"Peninsula","Year":2012,"Households":25226,"Median Household Income":"$71475.00"},{"Region":6,"SRA":15,"Area":"Poway","Year":2012,"Households":30054,"Median Household Income":"$117506.00"},{"Region":6,"SRA":39,"Area":"Ramona","Year":2012,"Households":11334,"Median Household Income":"$88991.00"},{"Region":1,"SRA":40,"Area":"San Dieguito","Year":2012,"Households":35520,"Median Household Income":"$103305.00"},{"Region":6,"SRA":51,"Area":"San Marcos","Year":2012,"Households":30536,"Median Household Income":"$65489.00"},{"Region":5,"SRA":35,"Area":"Santee","Year":2012,"Households":17577,"Median Household Income":"$78300.00"},{"Region":4,"SRA":22,"Area":"South Bay","Year":2012,"Households":36489,"Median Household Income":"$54417.00"},{"Region":3,"SRA":5,"Area":"Southeastern San Diego","Year":2012,"Households":42049,"Median Household Income":"$56626.00"},{"Region":5,"SRA":31,"Area":"Spring Valley","Year":2012,"Households":27737,"Median Household Income":"$74965.00"},{"Region":4,"SRA":20,"Area":"Sweetwater","Year":2012,"Households":40239,"Median Household Income":"$94927.00"},{"Region":2,"SRA":12,"Area":"University","Year":2012,"Households":24495,"Median Household Income":"$73746.00"},{"Region":6,"SRA":53,"Area":"Valley Center","Year":2012,"Households":8115,"Median Household Income":"$85004.00"},{"Region":1,"SRA":52,"Area":"Vista","Year":2012,"Households":32077,"Median Household Income":"$61044.00"},{"Region":null,"SRA":null,"Area":"San Diego County","Year":2012,"Households":1067462,"Median Household Income":"$73798.00"}]';

var json = JSON.parse(data);

var chart = c3.generate({
    bindto: '#chart2',
    data: {
        columns: [
            [json[0].Area, json[0].Households],
            [json[1].Area, json[1].Households],
            [json[2].Area, json[2].Households],
            [json[3].Area, json[3].Households], 
             [json[4].Area, json[4].Households], 
             [json[5].Area, json[5].Households], 
             [json[6].Area, json[6].Households], 
             [json[7].Area, json[7].Households], 
             [json[8].Area, json[8].Households], 
             [json[9].Area, json[9].Households], 
             [json[10].Area, json[10].Households], 
             [json[11].Area, json[11].Households],
             [json[12].Area, json[12].Households], 
             [json[13].Area, json[13].Households], 
             [json[14].Area, json[14].Households], 
             [json[15].Area, json[15].Households], 
             [json[16].Area, json[16].Households], 
             [json[17].Area, json[17].Households], 
             [json[18].Area, json[18].Households], 
             [json[19].Area, json[19].Households], 
             [json[20].Area, json[20].Households], 
             [json[21].Area, json[21].Households], 
             [json[22].Area, json[22].Households], 
             [json[23].Area, json[23].Households], 
             [json[24].Area, json[24].Households], 
             [json[25].Area, json[25].Households], 
             [json[26].Area, json[26].Households], 
             [json[27].Area, json[27].Households], 
             [json[28].Area, json[28].Households], 
             [json[29].Area, json[29].Households], 
             [json[30].Area, json[30].Households], 
             [json[31].Area, json[31].Households], 
             [json[32].Area, json[32].Households], 
             [json[33].Area, json[33].Households], 
             [json[34].Area, json[34].Households], 
             [json[35].Area, json[35].Households], 
             [json[36].Area, json[36].Households], 
             [json[37].Area, json[37].Households], 
             [json[38].Area, json[38].Households], 
             [json[39].Area, json[39].Households]
        ],
        type: 'bar'
    },

     bar: {
        width: 10

 //   axis: {
 //       x : {
 //               type: 'indexed',

 //               categories: [json[0].Area, json[1].Area, json[2].Area, json[3].Area, json[4].Area, json[5].Area, json[6].Area, json[7].Area, json[8].Area, json[9].Area, json[10].Area, json[11].Area, json[12].Area, json[13].Area, json[14].Area, json[15].Area, json[16].Area, json[17].Area, json[18].Area, json[19].Area, json[20].Area, json[21].Area, json[22].Area, json[23].Area, json[24].Area, json[25].Area, json[26].Area, json[27].Area, json[28].Area, json[29].Area, json[30].Area, json[31].Area, json[32].Area, json[33].Area, json[34].Area, json[35].Area, json[36].Area, json[37].Area, json[38].Area, json[39].Area, json[40].Area]
                
//            }
//    }

}

});

*/


var data = '[{"Region":5,"SRA":38,"Area":"Alpine","Year":2012,"Households":5347,"Median Household Income":"$91041.00"},{"Region":6,"SRA":63,"Area":"Anza-Borrego","Year":2012,"Households":1411,"Median Household Income":"$49948.00"},{"Region":1,"SRA":41,"Area":"Carlsbad","Year":2012,"Households":45184,"Median Household Income":"$89108.00"},{"Region":3,"SRA":1,"Area":"Central San Diego","Year":2012,"Households":73644,"Median Household Income":"$52607.00"},{"Region":4,"SRA":21,"Area":"Chula Vista","Year":2012,"Households":36812,"Median Household Income":"$47821.00"},{"Region":2,"SRA":11,"Area":"Coastal","Year":2012,"Households":34553,"Median Household Income":"$85455.00"},{"Region":4,"SRA":3,"Area":"Coronado","Year":2012,"Households":8413,"Median Household Income":"$99889.00"},{"Region":2,"SRA":13,"Area":"Del Mar-Mira Mesa","Year":2012,"Households":53963,"Median Household Income":"$115528.00"},{"Region":5,"SRA":34,"Area":"El Cajon","Year":2012,"Households":41285,"Median Household Income":"$55429.00"},{"Region":2,"SRA":17,"Area":"Elliott-Navajo","Year":2012,"Households":34898,"Median Household Income":"$83438.00"},{"Region":6,"SRA":50,"Area":"Escondido","Year":2012,"Households":50862,"Median Household Income":"$61751.00"},{"Region":6,"SRA":55,"Area":"Fallbrook","Year":2012,"Households":17235,"Median Household Income":"$72011.00"},{"Region":5,"SRA":37,"Area":"Harbison-Crest","Year":2012,"Households":5428,"Median Household Income":"$83290.00"},{"Region":5,"SRA":30,"Area":"Jamul","Year":2012,"Households":4674,"Median Household Income":"$121168.00"},{"Region":2,"SRA":10,"Area":"Kearny Mesa","Year":2012,"Households":59869,"Median Household Income":"$68676.00"},{"Region":5,"SRA":33,"Area":"La Mesa","Year":2012,"Households":24423,"Median Household Income":"$60838.00"},{"Region":5,"SRA":61,"Area":"Laguna-Pine Valley","Year":2012,"Households":1771,"Median Household Income":"$69316.00"},{"Region":5,"SRA":36,"Area":"Lakeside","Year":2012,"Households":18952,"Median Household Income":"$71155.00"},{"Region":5,"SRA":32,"Area":"Lemon Grove","Year":2012,"Households":9513,"Median Household Income":"$60434.00"},{"Region":3,"SRA":6,"Area":"Mid City","Year":2012,"Households":55532,"Median Household Income":"$45873.00"},{"Region":2,"SRA":16,"Area":"Miramar","Year":2012,"Households":525,"Median Household Income":"$45498.00"},{"Region":5,"SRA":62,"Area":"Mountain Empire","Year":2012,"Households":2121,"Median Household Income":"$59014.00"},{"Region":6,"SRA":14,"Area":"North San Diego","Year":2012,"Households":39040,"Median Household Income":"$104474.00"},{"Region":4,"SRA":4,"Area":"National City","Year":2012,"Households":15299,"Median Household Income":"$41936.00"},{"Region":1,"SRA":42,"Area":"Oceanside","Year":2012,"Households":54148,"Median Household Income":"$70503.00"},{"Region":6,"SRA":60,"Area":"Palomar-Julian","Year":2012,"Households":2266,"Median Household Income":"$57946.00"},{"Region":6,"SRA":54,"Area":"Pauma","Year":2012,"Households":2187,"Median Household Income":"$83094.00"},{"Region":1,"SRA":43,"Area":"Pendleton","Year":2012,"Households":6659,"Median Household Income":"$52692.00"},{"Region":2,"SRA":2,"Area":"Peninsula","Year":2012,"Households":25226,"Median Household Income":"$71475.00"},{"Region":6,"SRA":15,"Area":"Poway","Year":2012,"Households":30054,"Median Household Income":"$117506.00"},{"Region":6,"SRA":39,"Area":"Ramona","Year":2012,"Households":11334,"Median Household Income":"$88991.00"},{"Region":1,"SRA":40,"Area":"San Dieguito","Year":2012,"Households":35520,"Median Household Income":"$103305.00"},{"Region":6,"SRA":51,"Area":"San Marcos","Year":2012,"Households":30536,"Median Household Income":"$65489.00"},{"Region":5,"SRA":35,"Area":"Santee","Year":2012,"Households":17577,"Median Household Income":"$78300.00"},{"Region":4,"SRA":22,"Area":"South Bay","Year":2012,"Households":36489,"Median Household Income":"$54417.00"},{"Region":3,"SRA":5,"Area":"Southeastern San Diego","Year":2012,"Households":42049,"Median Household Income":"$56626.00"},{"Region":5,"SRA":31,"Area":"Spring Valley","Year":2012,"Households":27737,"Median Household Income":"$74965.00"},{"Region":4,"SRA":20,"Area":"Sweetwater","Year":2012,"Households":40239,"Median Household Income":"$94927.00"},{"Region":2,"SRA":12,"Area":"University","Year":2012,"Households":24495,"Median Household Income":"$73746.00"},{"Region":6,"SRA":53,"Area":"Valley Center","Year":2012,"Households":8115,"Median Household Income":"$85004.00"},{"Region":1,"SRA":52,"Area":"Vista","Year":2012,"Households":32077,"Median Household Income":"$61044.00"},{"Region":null,"SRA":null,"Area":"San Diego County","Year":2012,"Households":1067462,"Median Household Income":"$73798.00"}]';

var json = JSON.parse(data);
console.log(json[0].Households);
var isChartInitializedPop = false;
//function initializeChartPop() {
//	if (!isChartInitializedPop) {
//	isChartInitializedPop = true;
var chart = c3.generate({
    bindto: '#chart2',
    data: {
        columns: [
            ['Population', json[0].Households, json[1].Households, json[2].Households, json[3].Households, json[4].Households, json[5].Households, json[6].Households, json[7].Households, json[8].Households, json[9].Households, json[10].Households, json[11].Households, json[12].Households, json[13].Households, json[14].Households, json[15].Households, json[16].Households, json[17].Households, json[18].Households, json[19].Households, json[20].Households, json[21].Households, json[23].Households, json[24].Households, json[25].Households, json[26].Households, json[27].Households, json[28].Households, json[29].Households, json[30].Households, json[31].Households, json[32].Households, json[33].Households, json[34].Households, json[35].Households, json[36].Households, json[37].Households, json[38].Households, json[39].Households, json[40].Households]
        ],
        type: 'bar',
        colors: {
            Population: '#F05F40'
        },
    },

    colors: {
            Population: '#ffa500'
        },

    axis: {
        rotated: true,
        x : {
                type: 'category',

                categories: [json[0].Area, json[1].Area, json[2].Area, json[3].Area, json[4].Area, json[5].Area, json[6].Area, json[7].Area, json[8].Area, json[9].Area, json[10].Area, json[11].Area, json[12].Area, json[13].Area, json[14].Area, json[15].Area, json[16].Area, json[17].Area, json[18].Area, json[19].Area, json[20].Area, json[21].Area, json[22].Area, json[23].Area, json[24].Area, json[25].Area, json[26].Area, json[27].Area, json[28].Area, json[29].Area, json[30].Area, json[31].Area, json[32].Area, json[33].Area, json[34].Area, json[35].Area, json[36].Area, json[37].Area, json[38].Area, json[39].Area, json[40].Area]
                
            }
    }

	});


chart.resize({
  height: 600,
  width: 800
});






