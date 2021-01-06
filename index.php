<!doctype HTML>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>COVID-19 Travel Guide</title>
	<style>
		body {
			margin: 0;
			background-color: #284D6D;
			color: white; 
			overflow: auto; 
			font-family: Arial; /* Should be changed later */
		}
		@media only screen and (max-width: 992px) {
			h1 {
				font-size: 3em;
			}
		}
		#header {
			background-color: #3C8BB5;
			text-align: right;
			padding: .5em;
		}
		.links {
			margin-top: 0;
			margin-right: 1em;
			display: inline;
			padding: .5em;
			cursor: pointer;
		}
		@media only screen and (max-width: 992px) {
			#header {
				text-align: center; display: flex; padding: 0;
			}
			.links {
				margin: 0 1em 0 1em; text-align: center; width: 50%; font-size: 1.3em;
			}
		}
		.links:hover {
			background-color: #1D1D36;
		}
		
		/* ------------------------------------------ */
		
		#top-article-image {
			width: 50%;
			height: 20em;
			margin: auto;
			text-align: center;
			margin-top: 1em;
			padding: .5em;
			border-radius: 1em;
		}
		#top-article-image img {
			height: 100%; width: 100%;
			object-fit: cover;
			border-radius: .2em;
			opacity: .6;
		}
		#top-article-section:hover img {
			opacity: .3;
		}
		@media only screen and (max-width: 992px) {
			#top-article-image {
				width: 90%;
			}
		}
		#top-article-description {
			text-align: center;
			border-radius: .2em;
			margin: auto;
			margin-top: 1.5em;
			width: 50%;
			height: 20em;
			cursor: pointer;
			z-index: 2;
		}
		@media only screen and (max-width: 992px) {
			#top-article-description {
				width: 90%;
			}
		}
		h2 {
			margin-top: 1em;
			margin-left: .5em;
			margin-right: .5em;
		}
		#top-article-description a, .news-article-description a {
			margin: 1em 0 0 1em;
			font-size: .8em;
		}
		#top-article-section {
			display: grid; /* Makes div a grid so that child image div and child description div can overlap */
		}
		#top-article-image, #top-article-description {
			grid-area: 1 / 1; /* Overlaps description on top of image since description has a higher z-index */
		}
		#news-articles-section {
			display: flex;
			flex-wrap: wrap;
			width: 90%;
			margin: auto;
		}
		#news-articles-section div {
			margin: 1em auto 0 auto;
			height: 20em;
			width: 33em;
		}
		h1 {
			width: 90%;
			margin-left: 3em;
		}
		@media only screen and (max-width: 992px) {
			h1 {
				margin-left: 0;
				width: 100%;
				text-align: center;
			}
			#news-articles-section {
				flex-wrap: nowrap;
			}
			#top-article-description a {
				display: none;
			}
		}
		.news-article {
			display: grid;
			cursor: pointer;
		}
		.news-article img {
			height: 100%; width: 100%;
			object-fit: cover; opacity: .6;
		}
		.news-article div {
			margin: auto;
			margin-bottom: 20em;
			width: 50%;
			height: 20em;
		}
		.news-article-description, .news-article-image {
			grid-area: 1 / 1; /* Same overlap as before */
		}
		.news-article-description {
			text-align: center;
			opacity: 1; 
			z-index: 2;
		}
		.news-article:hover img {
			opacity: .2;
		}
		@media only screen and (max-width: 992px) {
			#news-articles-section { /* Horizontal scroll on mobile */
				overflow-x: scroll;
				overflow-y: hidden;
				white-space: nowrap;
			
				.news-article {
					display: inline-block;
				}
			}
			.news-article-description p, .news-article-description a {
				display: none;
			}
			.news-article-description h2 {
				white-space: normal;
			}
		}
		#covid-tips-section {
			width: 60%;
			margin: auto;
			display: flex;
		}
		#covid-tips-section ul {
			width: 50%;
			text-align: left;
			line-height: 2;
		}
		@media only screen and (max-width: 992px) {
			#covid-tips-section {
				width: 90%;
				display: block;
			}
			#covid-tips-section ul {
				width: 90%;
				margin: auto;
			}
		}
		a {
			color: white;
			text-decoration: none;
		}
	</style>
	<?php
	
		function fromTable($part, $id, $option) {
			$server = "students.cah.ucf.edu";
			$username = "ca631855";
			$password = ""; // hidden
			$databaseName = "ca631855";

			$connection = mysqli_connect("$server", "$username", "$password", "$databaseName") or die('Error');
				
			$sql = "SELECT $part FROM newsarticles WHERE ID='$id'";
			$result = mysqli_query($connection, $sql) or die;
				
			$row = mysqli_fetch_array($result);
				
			$x = 0;
				
			if (!is_null($row[$part])) { // Have to use a loop to display value from table, I don't know why
				while($row && $x <= 0) { // Prevents this from infinite loading and crashing the page
					if ($part == 'ImageURL') {
						echo "<img src="."'".$row[$part]."'".">";
					} else if ($part == 'Title') {
						echo "<h2>".$row[$part]."</h2>";
					} else if ($part == 'Author') {
						echo "<p>".$row[$part]."</p>";
					} else if ($part == 'ArticleURL' && $option == 0) {
						// echo "<a href="."'".$row[$part]."'".">".$row[$part]."</a>";
						echo "<a>".$row[$part]."</a>";
					} else if ($part == 'ArticleURL' && $option == 1) {
						echo "onclick="."\""."window.location="."'".$row[$part]."'"."\"";
					}
					$x++; // Prevents this from infinite loading and crashing the page
				}} else {
					echo 'Epic fail';
				}
		}
	
	?>
</head>
<body>

	<div id="header">
		<a href="https://students.cah.ucf.edu/~ca631855/workshop/" class="links">Home</a>
		<a href="https://students.cah.ucf.edu/~ca631855/workshop/usa.html" class="links">USA</a>
		<a href="https://students.cah.ucf.edu/~ca631855/workshop/world.html" class="links">World</a>
	</div>
	
	<div <?php fromTable('ArticleURL', 1, 1); ?> id="top-article-section"> 
		<div id="top-article-image">
			<?php fromTable('ImageURL', 1, 0); ?>
		</div>
		<div id="top-article-description">
			<?php fromTable('Title', 1, 0); ?>
			<?php fromTable('Author', 1, 0); ?>
			<?php fromTable('ArticleURL', 1, 0); ?>
		</div>
	</div>
	
	<!-- ----------------------------------------------- -->
	
	<br>
	<h1>Recent Travel News</h1>
	<div id="news-articles-section">
	
		<div <?php fromTable('ArticleURL', 2, 1); ?> class="news-article">
			<div class="news-article-image">
				<?php fromTable('ImageURL', 2, 0); ?>
			</div>
			<div class="news-article-description">
				<?php fromTable('Title', 2, 0); ?>
				<?php fromTable('Author', 2, 0); ?>
				<?php fromTable('ArticleURL', 2, 0); ?>
			</div>
		</div>
		<div <?php fromTable('ArticleURL', 3, 1); ?> class="news-article">
			<div class="news-article-image">
				<?php fromTable('ImageURL', 3, 0); ?>
			</div>
			<div class="news-article-description">
				<?php fromTable('Title', 3, 0); ?>
				<?php fromTable('Author', 3, 0); ?>
				<?php fromTable('ArticleURL', 3, 0); ?>
			</div>
		</div>
		<div <?php fromTable('ArticleURL', 4, 1); ?> class="news-article">
			<div class="news-article-image">
				<?php fromTable('ImageURL', 4, 0); ?>
			</div>
			<div class="news-article-description">
				<?php fromTable('Title', 4, 0); ?>
				<?php fromTable('Author', 4, 0); ?>
				<?php fromTable('ArticleURL', 4, 0); ?>
			</div>
		</div>
		<div <?php fromTable('ArticleURL', 5, 1); ?> class="news-article">
			<div class="news-article-image">
				<?php fromTable('ImageURL', 5, 0); ?>
			</div>
			<div class="news-article-description">
				<?php fromTable('Title', 5, 0); ?>
				<?php fromTable('Author', 5, 0); ?>
				<?php fromTable('ArticleURL', 5, 0); ?>
			</div>
		</div>
		<div <?php fromTable('ArticleURL', 6, 1); ?> class="news-article">
			<div class="news-article-image">
				<?php fromTable('ImageURL', 6, 0); ?>
			</div>
			<div class="news-article-description">
				<?php fromTable('Title', 6, 0); ?>
				<?php fromTable('Author', 6, 0); ?>
				<?php fromTable('ArticleURL', 6, 0); ?>
			</div>
		</div>
		<div <?php fromTable('ArticleURL', 7, 1); ?> class="news-article">
			<div class="news-article-image">
				<?php fromTable('ImageURL', 7, 0); ?>
			</div>
			<div class="news-article-description">
				<?php fromTable('Title', 7, 0); ?>
				<?php fromTable('Author', 7, 0); ?>
				<?php fromTable('ArticleURL', 7, 0); ?>
			</div>
		</div>
		
	</div>
	
	<!-- ----------------------------------------------- -->
	
	<br><br>
	<h1>COVID-19 Travel Tips</h1>
	<div id="covid-tips-section">
		<ul>
			<li>Clean your hands often, either with soap and water for 20 seconds or a hand sanitizer that contains at least 60% alcohol.</li>
			<li>Avoid close contact with people who are sick.</li>
			<li>Put distance between yourself and other people (at least 6 feet)</li>
		</ul>
		<ul>
			<li>Cover your mouth and nose with a mask when around others.</li>
			<li>Cover your cough or sneeze with a tissue, then throw the tissue in the trash.</li>
			<li>Clean and disinfect frequently touched objects and surfaces daily.</li>	
		</ul>
	</div>
	<br><br>
	
</body>
</html>
