import './styles/points.scss';

function Points(points){
  // console.log(points.points);
  // console.log(points.points[3]);
  const points_map = points.points.map((point_map) =>
    "<li>"+point_map.point+point_map.done+"</li>");
  console.log(points_map)

  return(
    <div className='points'>
      <ul>
        {points.points.map(({point, done}) => (
          <li className=
            {done ? 'points__point points__point_done' : 'points__point'}
            ><div className='points__checkbox'></div>{point}
          </li>
        ))}
        {/* <li>Заглушка</li> */}
      </ul>
    </div>
  )
}

export default Points;