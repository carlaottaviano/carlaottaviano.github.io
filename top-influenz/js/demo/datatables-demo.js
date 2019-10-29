// Call the dataTables jQuery plugin
$(document).ready(function() {
	$('#dataTable').DataTable();
});

$('#dataTable').dataTable( {
	"pagingType": "full_numbers",
	"language": {
		"paginate": {
			"previous": "<",
			"next": ">",
			"first": "<<",
			"last": ">>"
		}
	}
} );

