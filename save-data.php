<?php
$visits = json_decode($_POST['visits'], true);

// Salvar dados em arquivo JSON
$file = 'visits.json';
$data = json_decode(file_get_contents($file), true) || [];
$data['total'] = $data['total'] ? $data['total'] + $visits['total'] : $visits['total'];
foreach ($visits as $date => $count) {
  if ($date === 'total') continue;
  $data[$date] = $data[$date] ? $data[$date] + $count : $count;
}
file_put_contents($file, json_encode($data));
?>
