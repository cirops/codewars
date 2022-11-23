// https://www.codewars.com/kata/57e921d8b36340f1fd000059

const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) =>
  (
    dolphin
      ? sharkDistance / (sharkSpeed / 2) > pontoonDistance / youSpeed
      : sharkDistance / sharkSpeed > pontoonDistance / youSpeed
  )
    ? "Alive!"
    : "Shark Bait!";
