var bcrypt = require('bcryptjs');
const controller = {};


controller.signin = (req, res) => {   
  res.render('signin');
};


controller.inicio = (req, res) => {
     res.render('index', {
     });
  };

  
controller.signup = (req, res) => {
  res.render('signup', {
  });
};

//////////////////////////////////CAMARAS/////////////////////////////////////////////////
controller.camaras = (req, res) => {
  req.getConnection((err, conn) => {
    const ESTADO = "1";
    conn.query("SELECT * FROM camara INNER JOIN proveedores  ON camara.id_cat_proveedor = proveedores.id_proveedores INNER JOIN modelo  ON camara.id_cat_modelo = modelo.id_modelo INNER JOIN estados_camara  ON camara.id_cat_estado_camara = estados_camara.id_estado INNER JOIN tipo_camara  ON camara.id_cat_tipo_camara = tipo_camara.id_tipo INNER JOIN resolucion  ON camara.id_cat_resolucion = resolucion.id_resolucion WHERE id_cat_estado_camara = ?",[ESTADO], (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('camaras', {
        data: customers
     });
    });
  });
};

controller.camaranew = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT id_modelo,nombre_modelo FROM modelo ", (err, customers) => {  
      if (err) {
      res.json(err);
     }
     else{
      conn.query( "SELECT id_proveedores,nombre_provedor FROM proveedores ", (err, custo)=> {
        if (err) {
          res.json(err);
         }
         else{
          conn.query( "SELECT id_resolucion,name_resolucion FROM resolucion ", (err, resolucion)=> {
            if (err) {
              res.json(err);
             }
             else{
              conn.query( "SELECT id_tipo,tipo_camara FROM tipo_camara ", (err, tipo)=> {
                if (err) {
                  res.json(err);
                 }
                 else{
                  conn.query( "SELECT id_poste,clave_poste FROM postes ", (err, poste)=> {
                    if (err) {
                      res.json(err);
                     }
                     res.render('new_camara', {
                      data: customers,custo,resolucion,tipo,poste
                    });
                  });
                 }
                 
              });
             }
             
          });
         }
      });
     }

    });
  });
};



  controller.savecamara = (req, res) => {
    const data = req.body;
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO camara set ?', data, (err, customer) => {
        res.redirect('/camaras');
      })
    })
  };
  


//////////////////////////////////PROVEDOR/////////////////////////////////////////////////

  controller.provedornew = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query("SELECT * from proveedores ", (err, customers) => {
       if (err) {
        res.json(err);
       }
       res.render('new_provedor', {
          data: customers
       });
      });
    });
  };
  

    controller.addprovedor = (req, res) => {
      const data = req.body;
      req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO proveedores set ?', data, (err, customer) => {
          res.redirect('/provedornew');
        })
      })
    };

    controller.editprovedor = (req, res) => {
      const { id_proveedores } = req.params;
      req.getConnection((err, conn) => {
        conn.query("SELECT * FROM proveedores WHERE id_proveedores = ?", [id_proveedores], (err, rows) => {
          res.render('edit_provedor', {
            data: rows[0]
          })
        });
      });
    };
    
    controller.updateprovedor = (req, res) => {
      const { id_proveedores } = req.params;
      const newCustomer = req.body;
      req.getConnection((err, conn) => {
    
      conn.query('UPDATE proveedores set ? where id_proveedores = ?', [newCustomer, id_proveedores], (err, rows) => {
        res.redirect('/provedornew');
      });
      });
    };
    
    controller.deleteprovedor = (req, res) => {
      const { id_proveedores } = req.params;
      req.getConnection((err, connection) => {
        connection.query('DELETE FROM proveedores WHERE id_proveedores = ?', [id_proveedores], (err, rows) => {
          res.redirect('/provedornew');
        });
      });
    }



//////////////////////////////////TIPO/////////////////////////////////////////////////

controller.tiponew = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * from tipo_camara ", (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('new_tipo', {
        data: customers
     });
    });
  });
};


  controller.addtipo = (req, res) => {
    const data = req.body;
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO tipo_camara set ?', data, (err, customer) => {
        res.redirect('/tiponew');
      })
    })
  };

  controller.edittipo = (req, res) => {
    const { id_tipo } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM tipo_camara WHERE id_tipo = ?", [id_tipo], (err, rows) => {
        res.render('edit_tipo', {
          data: rows[0]
        })
      });
    });
  };
  
  controller.updatetipo = (req, res) => {
    const { id_tipo } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE tipo_camara set ? where id_tipo = ?', [newCustomer, id_tipo], (err, rows) => {
      res.redirect('/tiponew');
    });
    });
  };
  
  controller.deletetipo = (req, res) => {
    const { id_tipo } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM tipo_camara WHERE id_tipo = ?', [id_tipo], (err, rows) => {
        res.redirect('/tiponew');
      });
    });
  }


//////////////////////////////////RESOLUCION/////////////////////////////////////////////////

controller.resolucionnew = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * from resolucion ", (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('new_resolucion', {
        data: customers
     });
    });
  });
};


  controller.addresolucion = (req, res) => {
    const data = req.body;
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO resolucion set ?', data, (err, customer) => {
        res.redirect('/resolucionnew');
      })
    })
  };

  controller.editresolucion = (req, res) => {
    const { id_resolucion } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM resolucion WHERE id_resolucion = ?", [id_resolucion], (err, rows) => {
        res.render('edit_resolucion', {
          data: rows[0]
        })
      });
    });
  };
  
  controller.updateresolucion = (req, res) => {
    const { id_resolucion } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE resolucion set ? where id_resolucion = ?', [newCustomer, id_resolucion], (err, rows) => {
      res.redirect('/resolucionnew');
    });
    });
  };
  
  controller.deleteresolucion = (req, res) => {
    const { id_resolucion } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM resolucion WHERE id_resolucion = ?', [id_resolucion], (err, rows) => {
        res.redirect('/resolucionnew');
      });
    });
  }



  //////////////////MODELO///////////////////



  controller.modelonew = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query("SELECT * from modelo INNER JOIN marca ON modelo.id_cat_marca= marca.id_marca ", (err, customers) => {
       if (err) {
        res.json(err);
       }
       else{
        conn.query( "SELECT * FROM marca ", (err, marca)=> {
          if (err) {
            res.json(err);
           }
           res.render('new_modelo', {
            data: customers,marca
          });
        });
       }
      });
    });
  };

    
      controller.addmodelonew = (req, res) => {
        const data = req.body;
        console.log(req.body)
        req.getConnection((err, connection) => {
          const query = connection.query('INSERT INTO modelo set ?', data, (err, customer) => {
            console.log(customer)
            res.redirect('/modelonew');
          })
        })
      };


      controller.editmodelo = (req, res) => {
        const { id_modelo } = req.params;
              req.getConnection((err, conn) => {
                conn.query("SELECT * from modelo INNER JOIN marca ON modelo.id_cat_marca= marca.id_marca where id_modelo = ? ",[id_modelo], (err, customers) => {
                 if (err) {
                  res.json(err);
                 }
                 else{
                  conn.query( "SELECT * FROM marca ", (err, marca)=> {
                    if (err) {
                      res.json(err);
                     }
                     res.render('edit_modelo', {
                      data: customers[0],marca
                    });
                  });
                 }
                });
              });
            };
      

            controller.updatemodelo = (req, res) => {
              const { id_modelo } = req.params;
              const newCustomer = req.body;
              req.getConnection((err, conn) => {
            
              conn.query('UPDATE modelo set ? where id_modelo = ?', [newCustomer, id_modelo], (err, rows) => {
                res.redirect('/modelonew');
              });
              });
            };
            
            controller.deletemodelo = (req, res) => {
              const { id_modelo } = req.params;
              req.getConnection((err, connection) => {
                connection.query('DELETE FROM modelo WHERE id_modelo = ?', [id_modelo], (err, rows) => {
                  res.redirect('/modelonew');
                });
              });
            }







      //////////////////MARCA///////////////////

controller.marcanew = (req, res) => {
        req.getConnection((err, conn) => {
          conn.query("SELECT * from marca INNER JOIN fabricante ON marca.id_cat_fabricante= fabricante.id_fabricante ", (err, customers) => {
           if (err) {
            res.json(err);
           }
           else{
            conn.query( "SELECT * FROM fabricante ", (err, fabi)=> {
              if (err) {
                res.json(err);
               }
               res.render('new_marca', {
                data: customers,fabi
              });
            });
           }
          });
        });
      };

     
controller.addmarcanew = (req, res) => {
          const data = req.body;
          req.getConnection((err, connection) => {
            const query = connection.query('INSERT INTO marca set ?', data, (err, customer) => {
              res.redirect('/marcanew');
            })
          })
        };
  



        controller.editmarca = (req, res) => {
          const { id_marca } = req.params;
                req.getConnection((err, conn) => {
                  conn.query("SELECT * from marca INNER JOIN fabricante ON marca.id_cat_fabricante = fabricante.id_fabricante where id_marca = ? ",[id_marca], (err, customers) => {
                   if (err) {
                    res.json(err);
                   }
                   else{
                    conn.query( "SELECT * FROM fabricante ", (err, fabi)=> {
                      if (err) {
                        res.json(err);
                       }
                       res.render('edit_marca', {
                        data: customers[0],fabi
                      });
                    });
                   }
                  });
                });
              };
        

              controller.updatemarca = (req, res) => {
                const { id_marca } = req.params;
                const newCustomer = req.body;
                req.getConnection((err, conn) => {
              
                conn.query('UPDATE marca set ? where id_marca = ?', [newCustomer, id_marca], (err, rows) => {
                  res.redirect('/marcanew');
                });
                });
              };
              
              controller.deletemarca = (req, res) => {
                const { id_marca } = req.params;
                req.getConnection((err, connection) => {
                  connection.query('DELETE FROM marca WHERE id_marca = ?', [id_marca], (err, rows) => {
                    res.redirect('/marcanew');
                  });
                });
              }
        


        //////////////////FABRICANTE///////////////////
  
  
  
        controller.fabricantenew = (req, res) => {
          req.getConnection((err, conn) => {
            conn.query("SELECT * from fabricante ", (err, customers) => {
             if (err) {
              res.json(err);
             }
             res.render('new_fabricante', {
                data: customers
             });
            });
          });
        };
     
controller.addfabricantenew = (req, res) => {
         const data = req.body;
         console.log(req.body)
         req.getConnection((err, connection) => {
           const query = connection.query('INSERT INTO fabricante set ?', data, (err, customer) => {
             console.log(customer)
             res.redirect('/fabricantenew"');
           })
         })
       };

  

       controller.editfabricante = (req, res) => {
        const { id_fabricante } = req.params;
        req.getConnection((err, conn) => {
          conn.query("SELECT * FROM fabricante WHERE id_fabricante = ?", [id_fabricante], (err, rows) => {
            res.render('edit_fabricante', {
              data: rows[0]
            })
          });
        });
      };
      
      controller.updatefabricante = (req, res) => {
        const { id_fabricante } = req.params;
        const newCustomer = req.body;
        req.getConnection((err, conn) => {
      
        conn.query('UPDATE fabricante set ? where id_fabricante = ?', [newCustomer, id_fabricante], (err, rows) => {
          res.redirect('/fabricantenew');
        });
        });
      };
      
      controller.deletefabricante = (req, res) => {
        const { id_fabricante } = req.params;
        req.getConnection((err, connection) => {
          connection.query('DELETE FROM fabricante WHERE id_fabricante = ?', [id_fabricante], (err, rows) => {
            res.redirect('/fabricantenew');
          });
        });
      }



//////////////////borrar camara///////////////////
controller.deletecamara = (req, res) => {
  const { id_camara } = req.params;
  req.getConnection((err, connection) => {
    connection.query("DELETE FROM camara WHERE id_camara = ?", [id_camara], (err, rows) => {
      res.redirect('/camaras');
    });
  });
}


//////////////////editar camara////////////////

controller.editcamara = (req, res) => {
  const { id_camara } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM camara INNER JOIN proveedores  ON camara.id_cat_proveedor = proveedores.id_proveedores INNER JOIN modelo  ON camara.id_cat_modelo = modelo.id_modelo INNER JOIN estados_camara  ON camara.id_cat_estado_camara = estados_camara.id_estado INNER JOIN tipo_camara  ON camara.id_cat_tipo_camara = tipo_camara.id_tipo INNER JOIN resolucion  ON camara.id_cat_resolucion = resolucion.id_resolucion INNER JOIN postes  ON camara.id_cat_poste = postes.id_poste  where id_camara = ?", [id_camara],(err, rows) => {  
      if (err) {
      res.json(err);
     }
     else{
      conn.query( "SELECT id_modelo,nombre_modelo FROM modelo ", (err, customers)=> {
        if (err) {
          res.json(err);
         }
         else{
          conn.query( "SELECT id_proveedores,nombre_provedor FROM proveedores ", (err, custo)=> {
            if (err) {
              res.json(err);
             }
             else{
              conn.query( "SELECT id_resolucion,name_resolucion FROM resolucion ", (err, resolucion)=> {
                if (err) {
                  res.json(err);
                 }
                 else{
                  conn.query( "SELECT id_tipo,tipo_camara FROM tipo_camara ", (err, tipo)=> {
                    if (err) {
                      res.json(err);
                     }else{
                      conn.query( "SELECT id_poste,clave_poste FROM postes ", (err, poste)=> {
                        if (err) {
                          res.json(err);
                         }
                         res.render('camaras_edit', {
                          data: rows[0], customers,custo,resolucion,tipo,poste
                        });
                      });
                     }
                  });
                 }
                 
              });
             }
             
          });
         }
      });
     }

    });
  });
};





controller.updatecamara = (req, res) => {
  const { id_camara } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
  conn.query("UPDATE camara set ? where id_camara = ?", [newCustomer, id_camara], (err, rows) => {
    res.redirect('/camaras');
  });
  });
};






////////////////////////////////////////////////////////////////REporte camaras//
controller.reportecamara = (req, res) => {
  const { id_camara } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM camara WHERE id_camara = ?", [id_camara], (err, rows) => {
      res.render('reporte', {
        data: rows[0]
      })
    });
  });
};
/////////////////////guardar reporte camara//////////////////////////
controller.savereporte = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query("INSERT INTO reportes set ?", data, (err, customer) => {
      res.redirect('/confir');
    })
  })
};
//////////////confirmacion de camara//////////////////7
controller.confir = (req, res) => {
  req.getConnection((err, conn) => {

    conn.query("SELECT *  FROM  reportes ORDER BY id_reporte DESC LIMIT 0, 1",  (err, rows) => {
     res.render('confir', {
      data: rows[0],
     });
    });
  });
};

controller.updatema = (req, res) => {
  const { id_camara } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
  conn.query("UPDATE camara set ? where id_camara = ?", [newCustomer, id_camara], (err, rows) => {
    res.redirect('/camaras');
  });
  });
};

controller.deletema = (req, res) => {
  const { id_reporte } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM reportes WHERE id_reporte = ?', [id_reporte], (err, rows) => {
      res.redirect('/camaras');
    });
  });
}



/////////////////////////////postes////////////////////////////////7
controller.postes = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM postes INNER JOIN cat_colonias  ON postes.id_cat_colonia = cat_colonias.id_colonias', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('postes', {
        data: customers
     });
    });
  });

};
//////////////////////nuevo poste///////////////////////////////////////

controller.postenew = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * from cat_colonias ", (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('new_poste', {
        data: customers
     });
    });
  });
};


  controller.saveposte = (req, res) => {
    const data = req.body;
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO postes set ?', data, (err, customer) => {
        res.redirect('/postes');
      })
    })
  };
//////////////////////////colonia poste///////////////////////////////////





controller.colonianew = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * from cat_colonias INNER JOIN cat_ciudades ON cat_colonias.id_cat_ciudad = cat_ciudades.id_ciudades ", (err, customers) => {
     if (err) {
      res.json(err);
     }
     else{
      conn.query( "SELECT * FROM cat_ciudades ", (err, marca)=> {
        if (err) {
          res.json(err);
         }
         res.render('new_colonia', {
          data: customers,marca
        });
      });
     }
    });
  });
};

  
    controller.addcolonianew = (req, res) => {
      const data = req.body;
      req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO cat_colonias set ?', data, (err, customer) => {
          res.redirect('/colonianew');
        })
      })
    };


    controller.editcolonia = (req, res) => {
      const { id_colonias } = req.params;
            req.getConnection((err, conn) => {
              conn.query("SELECT * from cat_colonias INNER JOIN cat_ciudades ON cat_colonias.id_cat_ciudad = cat_ciudades.id_ciudades where id_colonias = ? ",[id_colonias], (err, customers) => {
               if (err) {
                res.json(err);
               }
               else{
                conn.query( "SELECT * FROM cat_ciudades ", (err, marca)=> {
                  if (err) {
                    res.json(err);
                   }
                   res.render('edit_colonia', {
                    data: customers[0],marca
                  });
                });
               }
              });
            });
          };
    

          controller.updatecolonia = (req, res) => {
            const { id_colonias } = req.params;
            const newCustomer = req.body;
            req.getConnection((err, conn) => {
          
            conn.query('UPDATE cat_colonias set ? where id_colonias = ?', [newCustomer, id_colonias], (err, rows) => {
              res.redirect('/colonianew');
            });
            });
          };
          
          controller.deletecolonia = (req, res) => {
            const { id_colonias } = req.params;
            req.getConnection((err, connection) => {
              connection.query('DELETE FROM cat_colonias WHERE id_colonias = ?', [id_colonias], (err, rows) => {
                res.redirect('/colonianew');
              });
            });
          }




///////////////////////ciudad poste//////////////////////////////////////

controller.ciudadnew = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * from cat_ciudades ", (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('new_ciudad', {
        data: customers
     });
    });
  });
};


  controller.addciudadnew = (req, res) => {
    const data = req.body;
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO cat_ciudades set ?', data, (err, customer) => {
        res.redirect('/ciudadnew');
      })
    })
  };

  controller.editciudad = (req, res) => {
    const { id_ciudades } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM cat_ciudades WHERE id_ciudades = ?", [id_ciudades], (err, rows) => {
        res.render('edit_ciudad', {
          data: rows[0]
        })
      });
    });
  };
  
  controller.updateciudad = (req, res) => {
    const { id_ciudades } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE cat_ciudades set ? where id_ciudades = ?', [newCustomer, id_ciudades], (err, rows) => {
      res.redirect('/ciudadnew');
    });
    });
  };
  
  controller.deleteciudad = (req, res) => {
    const { id_ciudades } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM cat_ciudades WHERE id_ciudades = ?', [id_ciudades], (err, rows) => {
        res.redirect('/ciudadnew');
      });
    });
  }



/////////////////////////////postes editar////////////////////////////////7
controller.editpost = (req, res) => {
  const { id_poste } = req.params;
  req.getConnection((err, conn) => {
    conn.query("Select * from postes INNER JOIN cat_colonias ON postes.id_cat_colonia = cat_colonias.id_colonias where id_poste = ?", [id_poste], (err, customer) => {
      if (err) {
        res.json(err);
       }else{
        conn.query( "SELECT * FROM cat_colonias ", (err, colonias)=> {
          if (err) {
            res.json(err);
           }
           res.render('postesedit', {
            data: customer[0],colonias
          })
        });
       }
    });
  });
};



controller.updatepost = (req, res) => {
  const { id_poste } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
  conn.query("UPDATE postes set ? where id_poste = ?", [newCustomer,  id_poste], (err, customer) => {
    res.redirect('/postes');
  });
  });
};
////////////////////////BORRAR POSTE/////////////////////////////////////7



controller.deletepost = (req, res) => {
  const { id_poste } = req.params;
  req.getConnection((err, connection) => {
    connection.query("DELETE FROM postes WHERE id_poste = ?", [id_poste], (err, rows) => {
      res.redirect('/postes');
    });
  });
}


///////////////////////ver camaras del poste//////////////////////////////////////



controller.vercam = (req, res) => {
  const { id_poste } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM camara INNER JOIN proveedores  ON camara.id_cat_proveedor = proveedores.id_proveedores INNER JOIN modelo  ON camara.id_cat_modelo = modelo.id_modelo INNER JOIN estados_camara  ON camara.id_cat_estado_camara = estados_camara.id_estado INNER JOIN tipo_camara  ON camara.id_cat_tipo_camara = tipo_camara.id_tipo INNER JOIN resolucion  ON camara.id_cat_resolucion = resolucion.id_resolucion   where id_cat_poste = ?", [id_poste], (err, rows) => {
      res.render('cam_poste', {
        data: rows
      })
    });
  });
};
  ////////////////////////PERSONAL/////////////////////////////////////
/////////////////////////////////////////////////////////////


controller.personal = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM personal INNER JOIN usuarios  ON personal.id_cat_usuario = usuarios.id_usuario INNER JOIN sesion ON personal.id_personal = sesion.id ", (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('personal', {
        data: customers
     });
    });
  });
};


//////componer///////////////
controller.personalnew = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * from usuarios ", (err, customer) => {
     if (err) {
      res.json(err);
     }else{
      conn.query( "SELECT * FROM preguntas ", (err, usuario)=> {
        if (err) {
          res.json(err);
         }
         res.render('new_personal', {
          data: customer,usuario
        })
      });
     }
    });
  });
};

controller.addpersonalnew = (req, res) => {
    const data = req.body;
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO personal set ?', data, (err, customer) => {
        res.redirect('/personal'); 
      })
    })
  };



/////////////////////
  controller.editusuario = (req, res) => {
    const { id_personal } = req.params;
    req.getConnection((err, conn) => {
      conn.query("Select * from personal INNER JOIN usuarios ON personal.id_cat_usuario = usuarios.id_usuario where id_personal = ?", [id_personal], (err, customer) => {
        if (err) {
          res.json(err);
         }else{
          conn.query( "SELECT * FROM usuarios ", (err, usuario)=> {
            if (err) {
              res.json(err);
             }
             res.render('edit_usuario', {
              data: customer[0],usuario
            })
          });
         } 
      });
    });
  };
  
  controller.updateusuario = (req, res) => {
    const { id_personal } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
    conn.query("UPDATE personal set ? where id_personal = ?", [newCustomer,  id_personal], (err, customer) => {
      res.redirect('/personal');
    });
    });
  };
  
  
  
  controller.deleteusuario = (req, res) => {
    const { id_personal } = req.params;
    req.getConnection((err, connection) => {
      connection.query("DELETE FROM personal WHERE id_personal = ?", [id_personal], (err, rows) => {
        res.redirect('/personal');
      });
    });
  }

  


//////crear el de preguntas select udate insert delete///////////////

////////////////////////MANTENIMIENTO ADMI/////////////////////////////////////7

controller.mantenimientos = (req, res) => {
  req.getConnection((err, conn) => {
    const ESTADO = "2";
    conn.query("SELECT * FROM camara INNER JOIN proveedores  ON camara.id_cat_proveedor = proveedores.id_proveedores INNER JOIN modelo  ON camara.id_cat_modelo = modelo.id_modelo  INNER JOIN tipo_camara  ON camara.id_cat_tipo_camara = tipo_camara.id_tipo INNER JOIN resolucion  ON camara.id_cat_resolucion = resolucion.id_resolucion INNER JOIN reportes  ON reportes.id_camara = camara.id_camara INNER JOIN tipo_mantenimiento  ON tipo_mantenimiento.id_mantenimiento = reportes.id_tipo_mantenimiento WHERE id_cat_estado_camara = ?",[ESTADO], (err, customers) => {
     if (err) {
      res.json(err);
     }
     
     res.render('mantenimientos', {
        data: customers
     });
    });
  });

};

////////////////////////PERFIL/////////////////////////////////////
controller.perfil = (req, res) => {
  const  username   = req.user.username;
  req.getConnection((err, conn,done) => {
    conn.query("SELECT * FROM sesion INNER JOIN personal ON sesion.id = personal.id_personal INNER JOIN preguntas ON preguntas.idpreguntas = personal.pregunta_secreta INNER JOIN usuarios on usuarios.id_usuario= personal.id_cat_usuario WHERE username = ? ", [username],(err, customers) => {
     
      res.render('perfil', {
        data: customers[0] 
      });   
    });
  });
 
  
};

controller.editperfil = (req, res) => {
  const { id_personal } = req.params;
  req.getConnection((err, conn) => {
    conn.query("Select * from personal INNER JOIN usuarios ON personal.id_cat_usuario = usuarios.id_usuario INNER JOIN preguntas ON preguntas.idpreguntas = personal.pregunta_secreta INNER JOIN sesion ON sesion.id= personal.id_personal where id_personal = ?", [id_personal], (err, customer) => {
      if (err) {
        res.json(err);
       }else{
        conn.query( "SELECT * FROM usuarios ", (err, usuario)=> {
          if (err) {
            res.json(err);
           }else{
            conn.query( "SELECT * FROM preguntas ", (err, preguntas)=> {
              if (err) {
                res.json(err);
               }
               res.render('edit_perfil', {
                data: customer[0],usuario,preguntas
              })
            });
           }
           
        });
       } 
    });
  });
};




controller.updateperfil = (req, res) => {
  const { id_personal } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
  conn.query("UPDATE personal set ? where id_personal = ?", [newCustomer,  id_personal], (err, customer) => {
    res.redirect('/perfil');
  });
  });
};
/////////////////////////////PREGUMTAS///////////////////////////////////////////7

controller.preguntas = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * from preguntas ", (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('new_preguntas', {
        data: customers
     });
    });
  });
};


  controller.addpreguntas = (req, res) => {
    const data = req.body;
    
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO preguntas set ?', data, (err, customer) => {
        
        res.redirect('/preguntas');
      })
    })
  };

  controller.editpreguntas = (req, res) => {
    const { idpreguntas } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM preguntas WHERE idpreguntas = ?", [idpreguntas], (err, rows) => {
        res.render('edit_preguntas', {
          data: rows[0]
        })
      });
    });
  };
  
  controller.updatepreguntas = (req, res) => {
    const { idpreguntas } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE preguntas set ? where idpreguntas = ?', [newCustomer, idpreguntas], (err, rows) => {
      res.redirect('/preguntas');
    });
    });
  };
  
  controller.deletepreguntas = (req, res) => {
    const { idpreguntas } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM proveedores WHERE idpreguntas = ?', [idpreguntas], (err, rows) => {
        res.redirect('/preguntas');
      });
    });
  }

////////////////////////////////////////////CUENTAS//////////////////////////////////////////////

controller.recuperar = (req, res) => {
  res.render('recuperar', {
  });
};




/////////////////////
controller.recuperarcuenta = (req, res) => {
  const  username   = req.query.username;
  req.getConnection((err, conn,done) => {
    conn.query("SELECT * FROM sesion INNER JOIN personal ON sesion.id = personal.id_personal INNER JOIN preguntas ON preguntas.idpreguntas = personal.pregunta_secreta WHERE username = ? ", [username],(err, customers) => {
     if (err) {
      res.json(err);
    
     }if(!customers.length){
      req.flash('message', 'Incorrecto');
      
      res.redirect('/recuperar');
     }else
     
      res.render('pregunta', {
        data: customers[0] 
     });    
    });
  });
};

controller.validar = (req, res) => {
  const  respuesta_secreta   = req.query.respuesta_secreta;
  req.getConnection((err, conn,done) => {
    conn.query("SELECT username FROM sesion INNER JOIN personal ON sesion.id = personal.id_personal INNER JOIN preguntas ON preguntas.idpreguntas = personal.pregunta_secreta WHERE respuesta_secreta = ? ", [respuesta_secreta],(err, customers) => {
     if (err) {
      res.json(err);
     }if(!customers.length){
      
      res.redirect('/recuperarcuenta');
     }else
      res.render('edit_password', {
        data: customers[0] 
     });
    });
  });
};




controller.tipo_usuario = (req, res) => {
 
  const  username   = req.user.username;
  req.getConnection((err, conn) => {
    conn.query("SELECT id_cat_usuario FROM sesion INNER JOIN personal ON sesion.id = personal.id_personal  WHERE username = ? ", [username],(err, customers) => {
      

     
      if(customers[0].id_cat_usuario == 1){
        res.render('index'); 
       
      }else {
        res.render('index_tecnico');
       
     }




    });
  });
};



/////////////////////////////////TECNICO TECNOCO TECNICO////////////////////////////////////////////////////77
controller.perfil_te = (req, res) => {
  const  username   = req.user.username;
  req.getConnection((err, conn,done) => {
    conn.query("SELECT * FROM sesion INNER JOIN personal ON sesion.id = personal.id_personal INNER JOIN preguntas ON preguntas.idpreguntas = personal.pregunta_secreta INNER JOIN usuarios on usuarios.id_usuario= personal.id_cat_usuario WHERE username = ? ", [username],(err, customers) => {
     
      res.render('perfil_tecnico', {
        data: customers[0] 
      });   
    });
  });
 
  
};


controller.editperfil_te = (req, res) => {
  const { id_personal } = req.params;
  req.getConnection((err, conn) => {
    conn.query("Select * from personal INNER JOIN usuarios ON personal.id_cat_usuario = usuarios.id_usuario INNER JOIN preguntas ON preguntas.idpreguntas = personal.pregunta_secreta INNER JOIN sesion ON sesion.id= personal.id_personal where id_personal = ?", [id_personal], (err, customer) => {
      if (err) {
        res.json(err);
       }else{
            conn.query( "SELECT * FROM preguntas ", (err, preguntas)=> {
              if (err) {
                res.json(err);
               }
               res.render('edit_perfil_te', {
                data: customer[0],preguntas
              })
            });
           }
           
        });
        
    
  });
};




controller.updateperfil_te = (req, res) => {
  const { id_personal } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
  conn.query("UPDATE personal set ? where id_personal = ?", [newCustomer,  id_personal], (err, customer) => {
    res.redirect('/perfil_te');
  });
  });
};




controller.mantenimientos_te = (req, res) => {
  req.getConnection((err, conn) => {
    const ESTADO = "2";
    conn.query("SELECT * FROM camara INNER JOIN proveedores  ON camara.id_cat_proveedor = proveedores.id_proveedores INNER JOIN modelo  ON camara.id_cat_modelo = modelo.id_modelo  INNER JOIN tipo_camara  ON camara.id_cat_tipo_camara = tipo_camara.id_tipo INNER JOIN resolucion  ON camara.id_cat_resolucion = resolucion.id_resolucion INNER JOIN reportes  ON reportes.id_camara = camara.id_camara INNER JOIN tipo_mantenimiento  ON tipo_mantenimiento.id_mantenimiento = reportes.id_tipo_mantenimiento WHERE id_cat_estado_camara = ?",[ESTADO], (err, customers) => {
     if (err) {
      res.json(err);
     }
     
     res.render('mantenimientos_te', {
        data: customers
     });
    });
  });

};



controller.cam_man = (req, res) => {
  const { id_reporte } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM reportes INNER JOIN camara ON camara.id_camara = reportes.id_camara INNER JOIN tipo_camara  ON camara.id_cat_tipo_camara = tipo_camara.id_tipo INNER JOIN tipo_mantenimiento  ON tipo_mantenimiento.id_mantenimiento = reportes.id_tipo_mantenimiento  WHERE id_reporte = ?",[id_reporte], (err, customers) => {
     if (err) {
      res.json(err);
     }
     
     res.render('camara_tec', {
        data: customers[0]
     });
    });
  });

};

controller.update_res = (req, res) => {
  const { id_camara } = req.params;
  
  req.getConnection((err, conn) => {
  conn.query("UPDATE camara set id_cat_estado_camara = '1' where id_camara = ?", [ id_camara], (err, rows) => {
    res.redirect('/mantenimientos_te');
  });
  });
};



module.exports = controller;
/*


controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

*/

