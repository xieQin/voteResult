<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of IndexAction
 *
 * @author zq
 */
class IndexAction extends BaseAction {

    /**
     * 获得验证码
     * @global type $q_phone
     * @global type $q_sn
     * @global type $q_os
     */
    public function getCode() {
        global $q_phone;


        $mgr = new FootManager();
        $res = $mgr->getCode($q_phone);
        if ($res) {
            echo $this->responseRight($res);
        } else {
            echo $this->responseFail($res);
        }
    }

    public function submitResult() {
        global $q_phone, $q_code, $q_result, $q_yy, $q_detail,$q_name;
        $mgr = new FootManager();
        $res = $mgr->checkMobile($q_code, $q_phone, $q_result, $q_yy,$q_detail,$q_name);
        if ($res == SubmitResult::Success) {
            echo $this->responseRight(SubmitResult::getResultMsg($res));
        } else {
            echo $this->responseFail(SubmitResult::getResultMsg($res), $res);
        }
    }

    public function getMyVot() {
        global $q_phone, $q_code;

        $mgr = new FootManager();
        $resultCode = GetResult::ErrorCode;
        $res = $mgr->getMyVote($q_code, $q_phone, $resultCode);
        if ($resultCode == GetResult::Success) {
            echo $this->responseRight($res['Result']);
        } else {
            echo $this->responseFail($res, $resultCode);
        }
    }

    public function createCode() {
        CommHelper:: getCode(4, 60, 20);
    }

    public function getVotResult() {
        $mgr = new FootManager();
        $res = $mgr->getResult();
        $length = sizeof($res);
        // echo $length;
        // $res[0]['Mobile'] = mymd5($res[0]['Mobile'], 'DE', '898');
        for($i = 0; $i < $length ; $i++) {
            $res[$i]['Mobile'] = mymd5($res[$i]['Mobile'], 'DE', '898');
        }
        echo json_encode($res);
    }

}

?>
