const { and } = require('sequelize');
const Item_Master = require('../models/Item_Master');
const Unit_Master=require('../models/Unit_Master');
const Group_Master=require('../models/Group_Master');

exports.createItem = (req, res) => {
    const { name, user,ip,cid,grid,uid } = req.body;
  
    // Create a new unit object
    const item = Item_Master.build({
      name: name,
      user:user.Username,
      ip:ip,
      block:false,
      cid:cid,
      grid:grid,
      uid:uid,
      unitId:uid,
      groupId:grid
    });
  
    // Save the item to the database
    item.save((err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to create unit' });
      }
      return res.status(201).json({ message: 'Unit created successfully' });
    });
  };
  


// Retrieve all units
exports.getAllItems = (req, res) => {
    Item_Master.findAll()
    .then(items=>{
        res.status(200).json({
            items: items.map((item) =>item.name)
          });
        }
    )
    .catch(err=>{
        console.log(err);
        return res.status(500).json({ error: 'Failed to retrieve Address' });
    }
    );
    
  };

  // Retrieve all units bys session
exports.getAllItemsBySession = async(req, res) => {
  let cid = req.params.cid;
   Item_Master.findAll({ include:[Group_Master,Unit_Master],where: {cid:cid,block:0} })
  .then(items=>{
 //   res.status(200).json({items:items});

    res.status(200).json({
        items: items.map((item) =>[item.name,item.group.name,item.unit.name])  });
     
    }
    
)
.catch(err=>{
    console.log(err);
    return res.status(500).json({ error: 'Failed to retrieve Address' });
}
);
  
};

//Retrive a single unit by name
exports.getItemByName = async(req, res) => {
    let name = req.params.name;
    let grid=req.params.grid;
    let uid=req.params.uid;
    let cid=req.params.cid; 
    try{
    const unit = await Item_Master.findOne({ where: {name:name,cid:cid,grid:grid,uid:uid} });
    if (!unit) {
        return res.status(401).json({ message: 'unable to fetch the unit list' });
      }
      res.status(200).json({id:unit.id});
    }
    catch(error){
        console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }

}


// Retrieve a single unit by ID
exports.getItemById = (req, res) => {
  const { id } = req.params.id;

  Item_Master.findById(id, (err, unit) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve unit' });
    }
    if (!unit) {
      return res.status(404).json({ error: 'Unit not found' });
    }
    return res.status(200).json(unit);
  });
};

// Update a unit by ID
exports.updateItemById = async(req, res) => {
 // const { id } = req.params.id;
  const { name, user,ip,cid ,id,grid,uid} = req.body;

  try {
    const item =await Item_Master.findOne({ where: {id:id} })

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Update the properties of the item
    item.ip=ip;
    item.name = name;
    item.grid=grid;
    item.uid=uid;
    item.user=user.Username;

    // Save the updated item
    await item.save();

    return res.status(200).json({ item,message: 'Item updated successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Failed to update item' });
  }
};

// Delete a unit by ID
exports.deleteItemById = async(req, res) => {
    const { cid ,name,grid,uid,ip,user} = req.body;

    try {
        const item = await Item_Master.findOne({ where: {name:name,cid:cid,grid:grid,uid:uid} });
  
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
     /* const unit = Unit_MasterDelete.build({
          name: name,
          user:user.Username,
          ip:ip,
          block:true,
          cid:cid
        });
        
         // Save the unit to the database
         unit.save((err) => {
          if (err) {
            return res.status(500).json({ error: 'Failed to create unit' });
          }
          return res.status(201).json({ message: 'Unit created successfully' });
        });
  */
      // deleted the updated item
     // Save the updated item
     item.block=1;
     item.user=user.Username;
     item.ip=ip;
     await item.save();

     return res.status(200).json({ item,message: 'Item updated successfully' });
   } catch (error) {
     console.log(error);
     return res.status(500).json({ error: 'Failed to update item' });
   }
};
