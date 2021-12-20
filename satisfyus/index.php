<?php
include 'ServerSide/libs/session.php';
?>
<!DOCTYPE html>

<html lang="en" ng-app='home'>

	<!-- begin::Head -->
	<head>
	<base href="/satisfyus/">
	<title ng-bind="title">myApp</title>

		<meta charset="utf-8" />
		<title>LION EVENTS</title>
		<meta name="description" content="Latest updates and statistic charts">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
		<link rel="icon" type="image/png" href="assets/img/lion.png">

		<!--begin::Web font -->
		<script src="assets/js/webfont.js"></script>
		<script>
			WebFont.load({
            google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700"]},
            active: function() {
                sessionStorage.fonts = true;
            }
          });
        </script>
		<!--end::Web font -->


	
		<link href="assets/vendors/base/vendors.bundle.css" rel="stylesheet" type="text/css" />
		<link href="assets/demo/default/base/style.bundle.css" rel="stylesheet" type="text/css" />
	<!--	<link href="assets/vendors/custom/fullcalendar/fullcalendar.bundle.css" rel="stylesheet" type="text/css" />
		-->
	   <link rel="stylesheet" href="assets/css/bootstrapv3.css">
	   <link rel="stylesheet" href="assets/css/select2.css">
	   <link type="text/css" rel="stylesheet" href="assets/Form/angular-form-builder.css"/>
	   <link rel="stylesheet" href="assets/css/select.css">
	   <link rel="stylesheet" href="assets/css/star.css">
	   <link rel="stylesheet" href="assets/css/profile.css">
	   <link rel="stylesheet" href="assets/css/dropzone.css">
	   <link rel="stylesheet" href="assets/css/bootstrap.min.css">
	   <link rel="stylesheet" href="assets/css/jquery-ui.min.css">
	   <link rel="stylesheet" href="assets/css/scrollbars.css">
       <link href='assets/calendar/fullcalendar.min.css' rel='stylesheet'/>
	   <link href='assets/calendar/fullcalendar.print.min.css' rel='stylesheet' media='print'/>
	   <!--<link rel='stylesheet' href='https://cdn.datatables.net/1.10.12/css/dataTables.bootstrap.min.css'>-->
	   <link rel="stylesheet" href="assets/css/dataTables.bootstrap.min.css">
	   <link rel="stylesheet" href="assets/css/style.css">
	   <link rel="stylesheet" href="assets/css/style-chat.css">


    <style>
        th,td{text-align: center;}
    </style>
   


	</head>

	<!-- end::Head -->

	<!-- begin::Body -->
	<body class="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
		<!-- begin:: Page -->
		<div class="m-grid m-grid--hor m-grid--root m-page ">

        <div ng-include="'views/layouts/Navbar.html'" ng-controller="NavbarController"></div>
			<!-- END: Header -->

			<!-- begin::Body -->
			<div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">

				<!-- BEGIN: Left Aside -->
				<button class="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn"><i class="la la-close"></i></button>
                <div ng-include="'views/layouts/Menu.html'" ng-controller="MenuController"></div>
				<!-- END: Left Aside -->
				<div class="m-grid__item m-grid__item--fluid m-wrapper">


					<div class="m-content">
					<div ng-view>

					</div>

					</div>
				</div>
			</div>

			<!-- end:: Body -->




		</div>

		<!-- end:: Page -->



		<!-- begin::Scroll Top -->
		<div id="m_scroll_top" class="m-scroll-top">
			<i class="la la-arrow-up"></i>
		</div>

		<!-- end::Scroll Top -->



		<script src="assets/vendors/base/vendors.bundle.js" type="text/javascript"></script>
	
	

	<script src="assets/js/jqueryv3.min.js"></script>
	
	<script src="assets/js/jquery-ui.min.js"></script>
	
	<script type="text/javascript" src="assets/js/angular.min.js"></script>
	
	<script type="text/javascript" src="assets/js/angular-route.min.js"></script>
	
	<script type="text/javascript" src="assets/js/ui-select.js"></script>
	
	<script type="text/javascript" src="assets/js/angular-chart.js"></script>
	
	<script type="module"  src="index.js"></script>
	
	<script src="assets/js/ui-bootstrap-tpls-1.2.4.js"></script>

	<script type="text/javascript" src="assets/js/bootstrapv3.min.js"></script>
	
	<script type="text/javascript" src="assets/Form/angular-form-builder.js"></script>
	
	<script type="text/javascript" src="assets/Form/angular-form-builder-components.js"></script>
		
	<script type="text/javascript" src="assets/js/angular-validator.min.js"></script>

   <script type="text/javascript" src="assets/js/angular-validator-rules.min.js"></script>

   <script src="assets/js/angular-sanitize.js"></script>
   
   <script src='assets/js/moment.min.js'></script>
  
  <script src='assets/demo/default/base/scripts.bundle.js' type="text/javascript"></script>

     <script src="assets/js/Chart.min.js"></script>
    <!-- <script src='https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.0.0/ui-bootstrap-tpls.min.js'></script>-->
    <script src='assets/js/ui-bootstrap-tpls.min.js'></script>
    <!-- <script src='https://cdnjs.cloudflare.com/ajax/libs/angular-ui-utils/0.1.1/angular-ui-utils.min.js'></script>-->
    <script src='assets/js/angular-ui-utils.min.js'></script>
    <!--<script src='https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.12/js/jquery.dataTables.min.js'></script>-->
    <script src='assets/js/jquery.dataTables.min.js'></script>
    <!--<script src='https://cdn.datatables.net/1.10.12/js/dataTables.bootstrap.min.js'></script>-->
    <script src='assets/js/dataTables.bootstrap.min.js'></script>
    <script src="assets/bower_components/rltm/web/rltm.js"></script>
    <script src="assets/bower_components/angular-chat/angular-chat.js"></script>
	<script src="assets/js/names.js"></script>
	<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js"></script>-->
	<script src='assets/js/jspdf.min.js'></script>
	<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.22/pdfmake.min.js"></script>-->
	<script src='assets/js/pdfmake.min.js'></script>
   <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>-->
   <script src='assets/js/html2canvas.min.js'></script>
	</body>

	<!-- end::Body -->
</html>




