import React from 'react'
import './stylesmain.css' 
const Addbook = () => {
  return (
    <div>
      
    	<div class="card-header">
        </div>
        <div class="card-body">
        	<form method="post">
        		<div class="row">
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">Book Name</label>
        				</div>
        			</div>
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">Select Author</label>
        					<select name="book_author" id="book_author" class="form-control">
        						<option value="">Select Author</option><option value="Alan Forbes">Alan Forbes</option><option value="Brett Shimson">Brett Shimson</option><option value="Brian Messenlehner">Brian Messenlehner</option><option value="Bruce Berke">Bruce Berke</option><option value="Carlos Buenosvinos">Carlos Buenosvinos</option><option value="Daginn Reiersol">Daginn Reiersol</option><option value="David Herman">David Herman</option><option value="Dayle Rees">Dayle Rees</option><option value="Joel Murach">Joel Murach</option><option value="Kevin Tatroe">Kevin Tatroe</option><option value="Laura Thompson">Laura Thompson</option><option value="Laura Thomson">Laura Thomson</option><option value="Lynn Beighley">Lynn Beighley</option><option value="Mark Myers">Mark Myers</option><option value="Robin Nixon">Robin Nixon</option><option value="Sanjib Sinha">Sanjib Sinha</option><option value="Tom Butler">Tom Butler</option><option value="Vikram Vaswani">Vikram Vaswani</option>        					</select>
        				</div>
        			</div>
        		</div>
        		<div class="row">
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">Select Category</label>
        					<select name="book_category" id="book_category" class="form-control">
        						<option value="">Select Category</option><option value="Database Management">Database Management</option><option value="Programming Skill">Programming Skill</option><option value="Web Design">Web Design</option><option value="Web Development">Web Development</option>        					</select>
        				</div>
        			</div>
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">Select Location Rack</label>
        					<select name="book_location_rack" id="book_location_rack" class="form-control">
        						<option value="">Select Location Rack</option><option value="A1">A1</option><option value="A10">A10</option><option value="A11">A11</option><option value="A2">A2</option><option value="A3">A3</option><option value="A4">A4</option><option value="A5">A5</option><option value="A6">A6</option><option value="A7">A7</option><option value="A8">A8</option><option value="A9">A9</option>        					</select>
        				</div>
        			</div>
        		</div>
        		<div class="row">
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">Book ISBN Number</label>
        				</div>
        			</div>
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">No. of Copy</label>
      				</div>
        			</div>
        		</div>
        		<div class="mt-4 mb-3 text-center">
        		</div>
        	</form>
        </div>
    
    </div>
  )
}

export default Addbook