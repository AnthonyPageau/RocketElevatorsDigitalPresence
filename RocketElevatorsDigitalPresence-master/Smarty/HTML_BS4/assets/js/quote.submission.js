$("#Apartment").hide();
$("#Business").hide();
$("#Floor").hide();
$("#Basement").hide();
$("#Parking").hide();
$("#Cage").hide();
$("#Occupant").hide();
$("#Hour").hide();
$("#Recommended").hide();
$("#Recommended1").hide();
$("#Recommended2").hide();
$("#Product").hide();
$("#CostPerCage").hide();
$("#CostPerCage1").hide();
$("#CostPerCage2").hide();
$("#InstallCageCost").hide();
$("#InstallCageCost1").hide();
$("#InstallCageCost2").hide();
$("#TotalCost").hide();
$("#TotalCost1").hide();
$("#TotalCost2").hide();
$("#Tenant").hide();
 

$("#Building").on("change",function () {
    var Type = $("#Building option:selected").val();
    
    if(Type=="Residential"){
    
        $("#Apartment").show();
        $("#ApartmentValue").val("");
        $("#Business").hide();
        $("#Floor").show();
        $("#FloorValue").val("");
        $("#Basement").show();
        $("#BasementValue").val("");
        $("#Parking").hide();
        $("#Cage").hide();
        $("#Occupant").hide();
        $("#Hour").hide();
        $("#Recommended").show();
        $("#Recommended1").hide();
        $("#Recommended2").hide();
        $("#Product").show();
        $("#CostPerCage").show();
        $("#CostPerCage1").hide();
        $("#CostPerCage2").hide();
        $("#InstallCageCost").show();
        $("#InstallCageCost1").hide();
        $("#InstallCageCost2").hide();
        $("#TotalCost").show();
        $("#TotalCost1").hide();
        $("#TotalCost2").hide();
        $("#Tenant").hide();
      
        

            

            

};
             
    if(Type=="Commercial"){
    
        $("#Apartment").hide();
        $("#Business").show();
        $("#BusinessValue").val("");
        $("#Floor").show();
        $("#FloorValue").val("");
        $("#Basement").show();
        $("#BasementValue").val("");
        $("#Parking").show();
        $("#ParkingValue").val("");
        $("#Cage").show();
        $("#CageValue").val("");
        $("#Occupant").hide();
        $("#Hour").hide();
        $("#Recommended").hide();
        $("#Recommended1").show();
        $("#Recommended2").hide();
        $("#Product").show();
        $("#CostPerCage").hide();
        $("#CostPerCage1").show();
        $("#CostPerCage2").hide();
        $("#InstallCageCost").hide();
        $("#InstallCageCost1").show();
        $("#InstallCageCost2").hide();
        $("#TotalCost").hide();
        $("#TotalCost1").show();
        $("#TotalCost2").hide();
        $("#Tenant").hide();
      

           
};    
    if(Type=="Corporate"){
      
        $("#Apartment").hide();
        $("#Business").hide();
        $("#Floor").show();
        $("#FloorValue").val("");
        $("#Basement").show();
        $("#BasementValue").val("");
        $("#Parking").show();
        $("#ParkingValue").val("");
        $("#Cage").hide();
        $("#Occupant").show();
        $("#OccupantValue").val("");
        $("#Hour").show();
        $("#Recommended").hide();
        $("#Recommended1").hide();
        $("#Recommended2").show();
        $("#RecommendedValue2").val("");
        $("#Product").show();
        $("#CostPerCage").hide();
        $("#CostPerCage1").hide();
        $("#CostPerCage2").show();
        $("#CostPerCageValue2").show();
        $("#CostPerCageValue2").val("");
        $("#InstallCageCost").hide();
        $("#InstallCageCost1").hide();
        $("#InstallCageCost2").show();
        $("#InstallCageCostValue2").val("");
        $("#TotalCost").hide();
        $("#TotalCost1").hide();
        $("#TotalCost2").show();
        $("#TotalCostValue2").val("");
        $("#Tenant").show();
   
};  
    if(Type=="Hybrid"){
 
        $("#Apartment").hide();
        $("#Business").hide();
        $("#Floor").show();
        $("#FloorValue").val("");
        $("#Basement").show();
        $("#BasementValue").val("");
        $("#Parking").show();
        $("#ParkingValue").val("");
        $("#Cage").hide();
        $("#Occupant").show();
        $("#OccupantValue").val("");
        $("#Hour").show();
        $("#Recommended").hide();
        $("#Recommended1").hide();
        $("#Recommended2").show();
        $("#RecommendedValue2").val("");
        $("#Product").show();
        $("#CostPerCage").hide();
        $("#CostPerCage1").hide();
        $("#CostPerCage2").show();
        $("#CostPerCageValue2").val("");
        $("#InstallCageCost").hide();
        $("#InstallCageCost1").hide();
        $("#InstallCageCost2").show();
        $("#InstallCageCostValue2").val("");
        $("#TotalCost").hide();
        $("#TotalCost1").hide();
        $("#TotalCost2").show();
        $("#TotalCostValue2").val("");
        $("#Tenant").show();
    
};
    if(Type=="Select"){
       
        $("#Apartment").hide();
        $("#Business").hide();
        $("#Floor").hide();
        $("#Basement").hide();
        $("#Parking").hide();
        $("#Cage").hide();
        $("#Occupant").hide();
        $("#Hour").hide();
        $("#Recommended").hide();
        $("#Recommended1").hide();
        $("#Recommended2").hide();
        $("#Product").hide();
        $("#CostPerCage").hide();
        $("#CostPerCage1").hide();
        $("#CostPerCage2").hide();
        $("#InstallCageCost").hide();
        $("#InstallCageCost1").hide();
        $("#InstallCageCost2").hide();
        $("#TotalCost").hide();
        $("#TotalCost1").hide();
        $("#TotalCost2").hide();
        $("#Tenant").hide();
       

};        
});

var Apart = document.getElementById("ApartmentValue");
var Busi = document.getElementById("BusinessValue");
var Floor = document.getElementById("FloorValue");
var Base = document.getElementById("BasementValue");
var Park = document.getElementById("ParkingValue");
var Cage = document.getElementById("CageValue");
var Occu = document.getElementById("OccupantValue");
var Hour = document.getElementById("HourValue");
var Reco = document.getElementById("RecommendedValue");
var Reco1 = document.getElementById("RecommendedValue1");
var Reco2 = document.getElementById("RecommendedValue2");
var Prod = document.getElementById("ProductValue");
var Cost = document.getElementById("CostPerCageValue");
var Cost1 = document.getElementById("CostPerCageValue1");
var Cost2 = document.getElementById("CostPerCageValue2");
var Inst = document.getElementById("InstallCageCostValue");
var Inst1 = document.getElementById("InstallCageCostValue1");
var Inst2 = document.getElementById("InstallCageCostValue2");
var Total = document.getElementById("TotalCostValue");
var Total1 = document.getElementById("TotalCostValue1");
var Total2 = document.getElementById("TotalCostValue2"); 

function commercial(){
    Reco1.value = Cage.value;
}

function residential(){
    var AF = Apart.value / Floor.value;
    Cage.value = Math.ceil(AF / 6);
    var Column = Math.ceil(Floor.value / 20);
    Reco.value = Column * Cage.value;
}

function corpohybrid(){
    var FB = parseInt(Floor.value) + parseInt(Base.value);
    var OF = Occu.value * Floor.value;
    Cage.value = Math.ceil(OF / 1000);
    var Column = Math.ceil(Floor.value / 20);
    Reco2.value = (Math.ceil(Cage.value / Column)) * Column;
    
}

function totalcost(){
    var prodValue = $("input[name='ProductValue']:checked").val();
        if(prodValue=="7565"){    
            //Residential
            Cost.value = (Reco.value * prodValue).toFixed(2); 
            Inst.value = (Cost.value * 0.1).toFixed(2); 
            Total.value = (parseInt(Cost.value) + parseInt(Inst.value)).toFixed(2);
            //Commerical
            Cost1.value = (Reco1.value * prodValue).toFixed(2); 
            Inst1.value = (Cost1.value * 0.1).toFixed(2);
            Total1.value = (parseInt(Cost1.value) + parseInt(Inst1.value)).toFixed(2);
            // Corporate and Hybrid
            Cost2.value = (Reco2.value * prodValue).toFixed(2); 
            Inst2.value = (Cost2.value * 0.1).toFixed(2);
            Total2.value = (parseInt(Cost2.value) + parseInt(Inst2.value)).toFixed(2);
            }
        if(prodValue=="12345"){
             //Residential
             Cost.value = (Reco.value * prodValue).toFixed(2); 
             Inst.value = (Cost.value * 0.13).toFixed(2); 
             Total.value = (parseInt(Cost.value) + parseInt(Inst.value)).toFixed(2);
             //Commerical
             Cost1.value = (Reco1.value * prodValue).toFixed(2); 
             Inst1.value = (Cost1.value * 0.13).toFixed(2);
             Total1.value = (parseInt(Cost1.value) + parseInt(Inst1.value)).toFixed(2);
             // Corporate and Hybrid
             Cost2.value = (Reco2.value * prodValue).toFixed(2); 
             Inst2.value = (Cost2.value * 0.13).toFixed(2);
             Total2.value = (parseInt(Cost2.value) + parseInt(Inst2.value)).toFixed(2);
            }
        if(prodValue=="15400"){
             //Residential
             Cost.value = (Reco.value * prodValue).toFixed(2); 
             Inst.value = (Cost.value * 0.16).toFixed(2); 
             Total.value = (parseInt(Cost.value) + parseInt(Inst.value)).toFixed(2);
             //Commerical
             Cost1.value = (Reco1.value * prodValue).toFixed(2); 
             Inst1.value = (Cost1.value * 0.16).toFixed(2);
             Total1.value = (parseInt(Cost1.value) + parseInt(Inst1.value)).toFixed(2);
             // Corporate and Hybrid
             Cost2.value = (Reco2.value * prodValue).toFixed(2); 
             Inst2.value = (Cost2.value * 0.16).toFixed(2);
             Total2.value = (parseInt(Cost2.value) + parseInt(Inst2.value)).toFixed(2);
            }           
}

$("input").on('change keyup click',function () {
    var TypeValue = $("#Building option:selected").val();
    if(TypeValue == "Commercial"){
             
        commercial();
        totalcost();
        }
    if (TypeValue == "Residential"){

        
        residential();
        totalcost();
    } 
    if (TypeValue == "Corporate"){

        corpohybrid();
        totalcost();
        }
    if (TypeValue == "Hybrid"){
        
        corpohybrid();
        totalcost();
        }             
    });

