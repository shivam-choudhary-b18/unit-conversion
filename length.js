function calculate(value,unit){

  switch (unit) {
    case 'm':
        document.getElementById('c').innerHTML = value*100 + " cm"
        document.getElementById('i').innerHTML = value*100/2.54 + " inches"
      break;
      case 'c':
          document.getElementById('m').innerHTML = value/100 + " m"
          document.getElementById('i').innerHTML = value/2.54 + " inches"
      break;
      case 'i':
          document.getElementById('m').innerHTML = value*2.54/100 + " m"
          document.getElementById('c').innerHTML = value*2.54 + " cm"
        break;

    default:

  }
}
