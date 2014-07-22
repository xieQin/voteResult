$(document).ready(function($) {
    var first = new Array();
    var second = new Array();
    var third = new Array();
    var fourth = new Array();
    var cFirst = new Array();
    var cSecond = new Array();
    var cThird = new Array();
    var cFourth = new Array();
    var record1 = 0;
    var record2 = 0;
    var record3 = 0;
    var record4 = 0;
	var url_lv = '';
    // var resultBtn = $(".showResultBtn");
    // alert('123123');

	getUrl();

    function getUrl() {
        var v = window.location.href;
        var index = v.lastIndexOf('/');

        url_lv = v.substring(0, index);
    }

    $(".showResultBtn").bind('click',function() {
        // alert('123123');
        $.ajax({
            url: url_lv + '/service/index.php/Index/getVotResult',
            type: 'post',
            dataType: 'json',
            // data: {},
            success:function(data) {
                // alert(data);
                var result = data;
                // result = aryToJson(JSON.parse(data));
                // alert(result);
                alertResult(result);
            }
        })
    })

    $(".showCResultBtn").bind('click',function() {
        // alert('123123');
        $.ajax({
            url: url_lv + '/service2/index.php/Index/getVotResult',
            type: 'post',
            dataType: 'json',
            // data: {},
            success:function(data) {
                // alert(data);
                var result = data;
                // result = aryToJson(JSON.parse(data));
                // alert(result);
                alertCResult(result);
            }
        })
    })

    $("#first").bind('click',function() {
            $(".showSecondResult").hide();
            $(".showThirdResult").hide();
            $(".showFourthResult").hide();
        })
    $("#second").bind('click',function() {
            $(".showFirstResult").hide();
            $(".showThirdResult").hide();
            $(".showFourthResult").hide();
        })
    $("#third").bind('click',function() {
            $(".showFirstResult").hide();
            $(".showSecondResult").hide();
            $(".showFourthResult").hide();
        })
    $("#fourth").bind('click',function() {
            $(".showFirstResult").hide();
            $(".showSecondResult").hide();
            $(".showThirdResult").hide();
        })

    $("#cFirst").bind('click',function() {
        // alert('123123');
            $(".showCSecondResult").hide();
            $(".showCThirdResult").hide();
            $(".showCFourthResult").hide();
        })
    $("#cSecond").bind('click',function() {
            $(".showCFirstResult").hide();
            $(".showCThirdResult").hide();
            $(".showCFourthResult").hide();
        })
    $("#cThird").bind('click',function() {
            $(".showCFirstResult").hide();
            $(".showCSecondResult").hide();
            $(".showCFourthResult").hide();
        })
    $("#cFourth").bind('click',function() {
            $(".showCFirstResult").hide();
            $(".showCSecondResult").hide();
            $(".showCThirdResult").hide();
        })

    function alertResult(result) {
        // alert(first);
        // $(".showResult").show();
        checkResult(result);

        var firstResult = $(".showFirstResult");
        var firstResultHtml = '';
        for(var i = 0; i < first.length; i++) {
            // first[i].Mobile = hex_md5('first[i].Mobile', 'DE', '898');
            // first = jsonToAry(first);
            firstResultHtml += '<dl><dt> 姓名：' + first[i].Name + ' YY号：' + first[i].YY + ' 手机号：' + first[i].Mobile + '</dt></dl>';
        }

        var secondResult = $(".showSecondResult");
        var secondResultHtml = '';
        for(var i = 0; i < second.length; i++) {
            secondResultHtml += '<dl><dt> 姓名：' + second[i].Name + ' YY号：' + second[i].YY + ' 手机号：' + second[i].Mobile + '</dt></dl>';
        }

        var thirdResult = $(".showThirdResult");
        var thirdResultHtml = '';
        for(var i = 0; i < third.length; i++) {
            thirdResultHtml += '<dl><dt> 姓名：' + third[i].Name + ' YY号：' + third[i].YY + ' 手机号：' + third[i].Mobile + '</dt></dl>';
        }

        var fourthResult = $(".showFourthResult");
        var fourthResultHtml = '';
        for(var i = 0; i < fourth.length; i++) {
            fourthResultHtml += '<dl><dt> 姓名：' + fourth[i].Name + ' YY号：' + fourth[i].YY + ' 手机号：' + fourth[i].Mobile + '</dt></dl>';
        }

        $(".showResultBtn").hide();
        firstResult.html(firstResultHtml);
        secondResult.html(secondResultHtml);
        thirdResult.html(thirdResultHtml);
        fourthResult.html(fourthResultHtml);
    }

    function alertCResult(result) {
        checkCResult(result);

        var firstCResult = $(".showCFirstResult");
        var firstCResultHtml = '';
        for(var i = 0; i < cFirst.length; i++) {
            // first[i].Mobile = hex_md5('first[i].Mobile', 'DE', '898');
            // first = jsonToAry(first);
            firstCResultHtml += '<dl><dt> 姓名：' + cFirst[i].Name + ' YY号：' + cFirst[i].YY + ' 手机号：' + cFirst[i].Mobile + '</dt></dl>';
        }

        var secondCResult = $(".showCSecondResult");
        var secondCResultHtml = '';
        for(var i = 0; i < cSecond.length; i++) {
            secondCResultHtml += '<dl><dt> 姓名：' + cSecond[i].Name + ' YY号：' + cSecond[i].YY + ' 手机号：' + cSecond[i].Mobile + '</dt></dl>';
        }

        var thirdCResult = $(".showCThirdResult");
        var thirdCResultHtml = '';
        for(var i = 0; i < cThird.length; i++) {
            thirdCResultHtml += '<dl><dt> 姓名：' + cThird[i].Name + ' YY号：' + cThird[i].YY + ' 手机号：' + cThird[i].Mobile + '</dt></dl>';
        }

        var fourthCResult = $(".showCFourthResult");
        var fourthCResultHtml = '';
        for(var i = 0; i < cFourth.length; i++) {
            fourthCResultHtml += '<dl><dt> 姓名：' + cFourth[i].Name + ' YY号：' + cFourth[i].YY + ' 手机号：' + cFourth[i].Mobile + '</dt></dl>';
        }

        $(".showCResultBtn").hide();
        firstCResult.html(firstCResultHtml);
        secondCResult.html(secondCResultHtml);
        thirdCResult.html(thirdCResultHtml);
        fourthCResult.html(fourthCResultHtml);
    }

    function checkResult(result) {
        for(var i = 0; i < result.length; i++) {
            var count = 0;
            // var j = 0;
            var res = result[i].Result;
            // first[0] = '1';

            res = aryToJson(JSON.parse(res));

            if(!res||!res.A||!res.B||!res.C||!res.D||!res.E||!res.F||!res.G||!res.H){
                continue;
            }

            // alert(res.A)
            if((res.A[0] == 1 && res.A[1] == 2) ||(res.A[0] == 2 && res.A[1] == 1)){
                count ++;
            }
            if((res.B[0] == 2 && res.B[1] == 3) ||(res.B[0] == 3 && res.B[1] == 2)){
                count ++;
            }
            if((res.C[0] == 1 && res.C[1] == 3) ||(res.C[0] == 3 && res.C[1] == 1)){
                count ++;
            }
            if((res.D[0] == 1 && res.D[1] == 2) ||(res.D[0] == 2 && res.D[1] == 1)){
                count ++;
            }
            if((res.E[0] == 1 && res.E[1] == 2) ||(res.E[0] == 2 && res.E[1] == 1)){
                count ++;
            }
            if((res.F[0] == 1 && res.F[1] == 4) ||(res.F[0] == 4 && res.F[1] == 1)){
                count ++;
            }
            if((res.G[0] == 1 && res.G[1] == 4) ||(res.G[0] == 4 && res.G[1] == 1)){
                count ++;
            }
            if((res.H[0] == 1 && res.H[1] == 3) ||(res.H[0] == 3 && res.H[1] == 1)){
                count ++;
            }

            if(count == 2 || count == 3){
                first[record1] = result[i];
                record1 ++;
            }
            if(count == 4 || count == 5){
                second[record2] = result[i];
                record2 ++;
            }
            if(count == 6 || count == 7){
                third[record3] = result[i];
                record3 ++;
            }
            if(count == 8){
                fourth[record4] = result[i];
                record4 ++;
            }
        }
    }

    function checkCResult(result) {
        for(var i = 0; i < result.length; i++) {
            var count = 0;
            var countC = 0;
            var res = result[i].Result;
            var resC = result[i].ResultDetail;

            res = aryToJson(JSON.parse(res));
            resC = aryToJson(JSON.parse(resC));

            if(res.A[0] == 1) {
                count ++;
            }
            if(res.B[0] == 3) {
                count ++;
            }
            if(res.C[0] == 1) {
                count ++;
            }
            if(res.D[0] == 1) {
                count ++;
            }
            if(resC.B[0] == 2) {
                countC = 1;
            }

            if(count == 2) {
                cFirst[record1] = result[i];
                record1 ++;
            }
            if(count == 3) {
                cSecond[record2] = result[i];
                record2 ++;
            }
            if(count == 4) {
                cThird[record3] = result[i];
                record3 ++;
            }
            if(countC == 1) {
                cFourth[record4] = result[i];
                record4 ++;
            }
        }
    }

})