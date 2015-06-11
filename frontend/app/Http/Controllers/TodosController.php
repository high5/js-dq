<?php namespace App\Http\Controllers;

use Input;
use Request;
use Response;
use DB;
use Log;

/**
 * Class BattleController
 * @package App\Http\Controllers
 */
class BattleController extends Controller {

    /**
     * Create a new controller instance.
     */
	public function __construct()
	{
		$this->middleware('guest');
	}








}
