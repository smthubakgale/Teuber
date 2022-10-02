
> datatable.js
  * Views           * Editor 
    0. Search Set     : .row_mc8
    1. Search List    : .row_mc7
    2. Editor         : .row_mc6
    3. Image          : .row_mc5
    4. Text Area      : .row_mc4
    5. Text           : .row_mc1
    6. Number         : .row_mc2 
    7. Date-Time      : .row_mc3
    8. Checkbox       : .row_mc9 
    9. ....
    10. Email         : .row_mc10
    11. Password      : .row_mc11
    12. Select        : .row_mc12
    13. TextArea List : .row_mc13
    14. Text List     : .row_mc14

  
1. Create Project
   => [Create App] > [Web] > [Copy firebaseConfig ]

2. Create FireStore Database

3. Source Code : https://github.com/nelzkie15-oss/firebase-crud

4. Limitations
   => 1MB per document
   => number of documents : unlimited 

5. Firebase Realtime Database

5. Firebase FireStore
   // Configuratio 
 // Read :: All :: Data
                        /* 
                        db.collection('employee').get().then((snapshot) =>
                        {
                          snapshot.docs.forEach(doc => 
                          {
                              var d = doc.data();

                              alert(JSON.stringify(d));
                          });
                        });
                        */
                        // Read :: Specific :: Data 
                        /*
                        db.collection('employee').where("email", "==", "smthubakgale@gmail.com").get().then((snapshot) =>
                        {
                          snapshot.docs.forEach(doc => 
                          {
                              var d = doc.data();

                              alert(JSON.stringify(d));
                          });
                        });
                        */
                        // Read :: Specific :: Count
                        /*
                        db.collection('employee').where("email", "==", "smthubakgale@gmail.com").get().then((snapshot) =>
                        {
                          alert(snapshot.size);
                        });
                        */
                        // Create :: 
                        /*
                        db.collection('employee').add({
                             fullname:'theo',
                             age: 7,
                             address: 'my place',
                             email: 'tesla@mail',
                             added_at: Date()
                        });
                        */ 
                        // Update :: Specific 
                        var d_new = {
                             fullname:'theo', 
                             email: 'tesla@mail' 
                        };

                        db.collection('employee').where("email", "==", d_new.email).get().then((snapshot) =>
                        { 
                            if(snapshot.size >= 1)
                            {
                                snapshot.docs.forEach(doc => 
                                { 
                                    var id = doc.id;  

                                    db.collection('employee').doc(id).set(d_new , { merge: true }); 
                                });
                            }
                        });
                        // Delete:: Specific 
                        var d_new = { 
                             email: 'smthubakgale@gmail.com' 
                        };

                        db.collection('employee').where("email", "==", d_new.email).get().then((snapshot) =>
                        { 
                            if(snapshot.size >= 1)
                            {
                                snapshot.docs.forEach(doc => 
                                { 
                                    var id = doc.id;  
                                    db.collection('employee').doc(id).delete(); 
                                });
                            }
                        });
                        // 

    