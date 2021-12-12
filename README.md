# Employees and Skills

[Employees and Skills](https://d20powodwu7s05.cloudfront.net/) is an application that allows users to enter and manage basic employee and skill information. 

### Get Started

1. Click on the link above and follow login/create account prompt.
2. Navigation options can be found by clicking the hamburger menu in the upper left hand corner.
3. The home page contains forms for entering new employees and skills.
4. The skills page displays a static table of skills.
5. The employee page displays the employee table with edit and delete functionality. 
6. Employee id's on the employee table are clickable.
    * Links display the employee and how they are associated to skills.

### Testing

1. Create new employees and skills by using forms found at the top of the home page.
2. To update, or delete an employee click on pencil to the left of the employee. 
    * toggle form will allow necessary changes to the employee, and icons to the left will complete requests.
3. To view an employee click on the employee id on the employee table. 
    * The add skills button will allow skills to be associated with an employee.

### Local development 

If interested in local development and testing please open an issue to request appropriate credentials from `@cahall555`. 

## Future Application Growth

* Update skill deletion 
    * Cascade delete is necessary to accommodate all use cases. 
        1. Delete skill from employee by removing skill from employee skills join table. 
        2. Remove skill entirely by removing all instances of skill from employee skill join table and skill table.

* Change formatting of employee id to create more direction for end user (id is clickable)

* Update id's from simple string to auto generated and unique uuid's

* Implement full CRUD on skills table

* Implement sort and filter on skills and employee tables

* Implement auto close on menu navigation

* Hide menu from login page

* Prevent the same skill from being added twice to an employee