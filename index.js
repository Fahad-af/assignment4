///this is product name section 
function add(name){
      if(name=='Fan'){
           const fanprice=document.getElementById('fanprice').innerHTML
          const totalprice =document.getElementById('totalprice').innerHTML
         const mainprice= parseInt(fanprice)+parseInt(totalprice)
        document.getElementById('totalprice').innerHTML=mainprice.toString()

        common ()


          const h3 = document.createElement('h3')
          const button = document.createElement('button')
         h3.innerHTML='Fan'
         button.innerHTML='Remove'
         const itemshow =document.getElementById('itemshow')
         itemshow.appendChild(h3)
         itemshow.appendChild(button)
         button.addEventListener('click',function(){
           const qn= document.getElementById('qn').innerHTML
          const qn2 = parseInt(qn)-1
          const fprice =document.getElementById('fanprice').innerHTML
          const tprice =document.getElementById('totalprice').innerHTML
          const mainp = parseInt(tprice)-parseInt(fprice)
          
          
         if(parseInt(qn2)>=0 && parseInt(mainp)>=0){
            
            document.getElementById('qn').innerHTML=qn2
            document.getElementById('totalprice').innerHTML=mainp
           
            
         }
         else{
            alert('invalid number')
         }
        const id= button.id=Math.random()
        document.getElementById(id).style.display='none'
        const id1 =h3.id=Math.random()
        document.getElementById(id1).style.display='none'
         
      })
      
      }         
           
      else if(name=='Light'){
         const lightprice=document.getElementById('ligntprice').innerHTML ;
         const totalprice =document.getElementById('totalprice').innerHTML
         const mainprice =parseFloat(lightprice)+parseInt(totalprice)
         document.getElementById('totalprice').innerHTML=mainprice.toString()
         common ()

         //////
         const h3 = document.createElement('h3')
          const button = document.createElement('button')
         h3.innerHTML='Light'
         button.innerHTML='Remove'
         const itemshow =document.getElementById('itemshow')
         itemshow.appendChild(h3)
         itemshow.appendChild(button)
         ////
         button.addEventListener('click',function(){
         const qn = document.getElementById('qn').innerHTML
         const qn2 =parseInt(qn)-1
         document.getElementById('qn').innerHTML=qn2
         
         const fp =document.getElementById('totalprice').innerHTML
         console.log(fp)
         const lp=document.getElementById('ligntprice').innerHTML
         console.log(lp)
         const mp =parseInt(fp)-parseInt(lp)
         document.getElementById('totalprice').innerHTML=mp.toString()
         button.className='btn btn-primary'
         /// button remove code
         const id= button.id=Math.random()
        document.getElementById(id).style.display='none'
        const id1 =h3.id=Math.random()
        document.getElementById(id1).style.display='none'

         })
         


         
      }
    
}
function common (){
      const qn =document.getElementById('qn').innerHTML
      const qn2=parseInt(qn)+1
      document.getElementById('qn').innerHTML=qn2.toString()
    
}
function remove(name){
   if(name=="light"){
      const remove =document.getElementById('product2')
      remove.style.display='none'
   }else if(name=='fan'){
     
            const remove =document.getElementById('product')
            remove.style.display='none'
         
   }
}

