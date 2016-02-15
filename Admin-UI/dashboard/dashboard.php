<!Doctype>
<html>
	<head>
		<meta charset="utf-8">
		<title>Frontend Development</title>
		<?php include '../head.php' ?>
	</head>
	<body id="dashboard">
		<?php include '../header/header.php' ?>
		<div id="largeBox">
			<h1>Event Views</h1>
			<canvas id="graph" width="1200"></canvas>
			<canvas id="graphM" width="800"></canvas>
			<canvas id="graphS" width="400"></canvas>
			
		</div>
		<div id="colWrap">
				<div id="colNotes">
					<h1>Notifications</h1>
					<a href="">
						<strong>John Smith</strong>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</a>
					<a href="">
						<strong>John Smith</strong>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</a>
					<a href="">
						<strong>John Smith</strong>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</a>
				</div>
				<div id="colEvents">
					<h1>Events</h1>
					<ul class="ui_navlist">
						
					</ul>
				</div>
			</div>
	</body>
</html>