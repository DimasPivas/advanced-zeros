module.exports = function getZerosCount(number, base) {
  primes = {};  // Значение = кратности ключа в base
  let baseForChanging = base;
  for(let i = 2; baseForChanging > 1; ) {
    if (baseForChanging % i == 0) {
      if(i in primes) {
        primes[i]++;
      }
      else {
        primes[i] = 1;
      }
      baseForChanging /= i;
    }
    else {
      ++i;
    }
  }

  let multiplicity = {};  // Значение = кратности ключа в факториале числа number
  for(let key in primes) {
    let pow = 1;
    let elem;
    while (( elem = Math.floor(number / Math.pow(key, pow)) ) > 0) {
      if(key in multiplicity) {
        multiplicity[key] += elem;
      }
      else {
        multiplicity[key] = elem;
      }
      ++pow;
    }
  }
  
  for(let key in primes) {  // Учитываем кратность простого делителя в base
    multiplicity[key] = Math.floor(multiplicity[key] / primes[key]);
  }
  
  let min = 0;  // Находим минимум из полученных чисел
  for(let key in primes) {
    if(min != 0 && multiplicity[key] < min) {
      min = multiplicity[key];
    }
    if(min == 0) {
      min = multiplicity[key];
    }
  }
  return min;
}