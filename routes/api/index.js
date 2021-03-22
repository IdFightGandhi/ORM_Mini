const router = require('express').Router();


router.get('/', (req, res) => {
    // try {
    //   console.log('/api/');
    //   res.status(200).json();
    // } catch (err) {
    //   res.status(500).json(err);
    // }
    console.log('test');
    res.status(200).json();

  });

router.get('/travellers', (req, res)=>{
  console.log('get api/travellers hit');
  res.status(200).json();


});

router.post('/travellers', (req, res)=>{
  console.log ('post api/travellers hit');
  res.status(200).json();

});

router.get('/travellers/:id', (req, res)=>{
  console.log('travellers params get hit');
  res.status(200).json();
});

router.delete('/travellers/:id', (req, res)=>{
  console.log('travellers params delete hit');
  res.status(200).json();
});


router.post('/trips', (req,res)=>{
  console.log('post api/trips hit');
  res.status(200).json();

});

router.delete('/trips/:id', (req, res)=>{
  console.log('trips params delete hit');
  res.status(200).json();
});


router.post('/locations', (req,res)=>{
  console.log('post locations/trips hit');
  res.status(200).json();

});

router.get('/locations', (req,res)=>{
  console.log('get locations/trips hit');
  res.status(200).json();

});

router.get('/locations/:id', (req, res)=>{
  console.log('get locations params hit');
  res.status(200).json();
});

router.delete('/locations/:id', (req, res)=>{
  console.log('locations params delete hit');
  res.status(200).json();
});



  module.exports = router;


