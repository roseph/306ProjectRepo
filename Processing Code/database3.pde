import de.bezier.data.sql.*;
MySQL db;
import processing.serial.*;
Serial myPort; //Create object from Serial class
String raw = null; // Data received from the serial port
String portName = Serial.list()[0]; 
int val = 0;
int timer = 0;
void setup()
{
   myPort = new Serial( this, portName, 9600);
   size(100,100);
   String user = "root";
   String password = "isat306sec1";
   String database = "mydb";
   db = new MySQL( this, "134.126.67.231", database, user, password);
   if (db.connect())
   {
     println("IT CONNECTED");
   }
}
void draw()
 { 
   if ( myPort.available() > 0)
   { raw = myPort.readStringUntil('\n');
   println(raw);
   if (raw !=null)
     {println(raw.length());
      if (raw.length()==3)
       {val++;
     println("The value was incremented and it is now " + val);}
       if (raw.length()==4)
       {
     val--;}
   println("the value was decremented and it is now " + val);}
    // raw = null;
   int time = millis();}

 if (millis() - timer >10000)
   {database_stuff();
 timer = millis();
 val=0;}}
void database_stuff()
{ if (db.connect())
  {db.query("SELECT Cur_ppl FROM room WHERE Room_ID=2");
  db.next();
  println("current people is " + db.getInt(1));
  int current_occupancy= int(db.getInt(1));
   String table = "room";
   String[] column ={"Room_ID","Cur_ppl",};
   int change= val + current_occupancy;
   println("the new value is " +change);
  Object[] values ={"2", str(change)};
db.insertUpdateInDatabase( table, column, values);}}
