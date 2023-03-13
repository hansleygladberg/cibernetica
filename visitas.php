<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$data = json_decode(file_get_contents('visits.json'), true);
?>
<p>Total de visitantes únicos: <?php echo $data['total']; ?></p>
<table>
  <thead>
    <tr>
      <th>Data</th>
      <th>Visitantes</th>
      <th>Número de visitas</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($data as $date => $count): ?>
      <?php if ($date === 'total') continue; ?>
      <tr>
        <td><?php echo $date; ?></td>
        <td><?php echo $count; ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>


</body>
</html>