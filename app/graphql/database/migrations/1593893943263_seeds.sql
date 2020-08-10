INSERT INTO roles(title)
VALUES 
('admin'), 
('blogger'); 

INSERT INTO permissions(action)
VALUES
('post'), 
('manage-users');

/*INSERT INTO roles_permissions (role_id, permission_id)
VALUES
(1,1)
(1,2),
(2,1);*/

INSERT INTO users (role_id, email, first_name, last_name)
VALUES
(1, 'mahamlimassy@gmail.com', 'Frosh', '2020');

INSERT INTO blog_categories (label, description)
VALUES
('Student life', 'All about student life at McGill and in the EUS from parties to hackathons'),
('Frosh updates', 'Updates related to frosh 2020'),
('University Tips', 'Anything related to academics, mental wellness, housing, internship advice and life in Montreal'),
('Skills', 'Skill development articles written by groups and clubs based on their focus'), 
('Winter Frosh', 'Things to know and prepare for the first ever winter frosh!');

INSERT INTO blog_posts (author_id, title,description, text, image, active, keyword1, keyword2, bg_src, bg_type)
VALUES
(1, 'Welcome to Frosh 2020!', "Hi everyone! Congrats Welcome to the big family that is McGill Engineering <3",'', 'logo.png', 1,'hello','bye', 'logo.png', 'Image' );

/*INSERT INTO blog_post_comments (post_id, author_id, comment)
VALUES
(1,1, 'Lit');*/

/*INSERT INTO blog_post_categories (post_id, category_id)
VALUES
(1,4),
(1,5),
(2,7),
(3,4), 
(3,5), 
(4,5),
(5,4),
(6,1),
(6,2),
(7,4),
(8,5),
(9,2),
(9,3);*/