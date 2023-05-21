const Unit_Master = require('../models/Unit_Master');
const Unit_MasterDelete=require('../models/Unit_MasterDelete');

exports.createUnit = (req, res) => {
    const { name, user,ip,cid } = req.body;
  
    // Create a new unit object
    const unit = Unit_Master.build({
      name: name,
      user:user.Username,
      ip:ip,
      block:false,
      cid:cid
    });
  
    // Save the unit to the database
    unit.save((err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to create unit' });
      }
      return res.status(201).json({ message: 'Unit created successfully' });
    });
  };
  


// Retrieve all units
exports.getAllUnits = (req, res) => {
    Unit_Master.findAll()
    .then(units=>{
        res.status(200).json({
            units: units.map((unit) =>unit.name),units1:units
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
exports.getAllUnitsBySession = async(req, res) => {
  let cid = req.params.cid;
  
   Unit_Master.findAll( { where: {cid:cid} })
  .then(units=>{
    res.status(200).json({
        units: units.map((unit) =>[unit.name,unit.id])
      });
    }
)
.catch(err=>{
    console.log(err);
    return res.status(500).json({ error: 'Failed to retrieve Address' });
}
);
  
};

//Retrive a single unit by name
exports.getUnitByName = async(req, res) => {
    let name = req.params.name;
    try{
    const unit = await Unit_Master.findOne({ where: {name:name} });
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
exports.getUnitById = (req, res) => {
  const { id } = req.params.id;

  Unit_Master.findById(id, (err, unit) => {
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
exports.updateUnitById = async(req, res) => {
 // const { id } = req.params.id;
  const { name, user,ip,cid ,id} = req.body;

  try {
    const item =await Unit_Master.findOne({ where: {id:id} })

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Update the properties of the item
    item.ip=ip;
    item.name = name;

    // Save the updated item
    await item.save();

    return res.status(200).json({ item,message: 'Item updated successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Failed to update item' });
  }
};

// Delete a unit by ID
exports.deleteUnitById = async(req, res) => {
    const { name, user,ip,cid ,id} = req.body;

    try {
      const item =await Unit_Master.findOne({ where: {id:id} })
  
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      const unit = Unit_MasterDelete.build({
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
  
      // deleted the updated item
      await item.destroy();
  
      return res.status(200).json({ message: 'Item updated successfully' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Failed to update item' });
    }
};
