function filterByRange(range, products){
    if(!range.range_0_25 && !range.range_25_50 && !range.range_50_100 && !range.range_100) return products;
    let filteredByRange = products.filter((elem)=>{
      if(f1(elem) || f2(elem) || f3(elem) || f4(elem)) return true;
      return false;
    });
    return filteredByRange;
    function f1(elem){
      if(!range.range_0_25){ return false;}
      else if(elem.price >= 0 && elem.price <= 25){ 
        return true;
      }
      return false;
    }
    function f2(elem){
      if(!range.range_25_50){ return false;}
      else if(elem.price >= 25 && elem.price <= 50){ 
        return true;
      }
      return false;
    }
    function f3(elem){
      if(!range.range_50_100){ return false;}
      else if(elem.price >= 50 && elem.price <= 100){ 
        return true;
      }
      return false;
    }
    function f4(elem){
      if(!range.range_100){ return false;}
      else if(elem.price >= 100){ 
        return true;
      }
      return false;
    }
}
export default filterByRange;