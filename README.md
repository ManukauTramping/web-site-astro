# Manukau Tramping Club Web-site Generator

> Source code to statically generate web-site from Content Management System.

## Live site

- [Web site](https://manukautrampingclub.netlify.com/)

## Technologies ⚛️

- Astro
- Bulma
- Contentful CMS
- Netlify Deployment

## How to update content?

### 1. Get an account on Contentful

You need to be invited by a club admin. When you receive your invite, follow the link to create your account with access to the web-site content. You have the option of linking a Google account to Contentful for simpler login.

When you login, select the option *Content* from the top menu bar. Do all your work under this menu. Do *not* edit under the *Content Model* menu.

### 2. Create/edit Trips

In the left-hand panel, select *Trips View* under *Shared Views*. All trips will appear in the main display panel. You can sort the trips by *Trip Date* by clicking the column heading.

Click an existing Trip to edit the trip.

Click on *Add Trip* in the top right-hand corner to add a new trip. Always select the *Suggested Content Type*.

Enter the relevant informtion into the relevant fields. *Trip Date*, *Title*, *Grade* and *Meetup Details* are required. All other fields are optional.

You can select one or more leaders from existing contacts by clicking *Link existing entries*. 

To create a new contact as the leader, click *Create new Contacts and link*. On the resulting page, enter a name and phone number, then select *Publish* from the dropdown labelled *DRAFT*. Then click *Close* in the top right-hand corner.

Instead of entering a Description, you have the option of creating or using a shared description under *Standard Tramps*. Follow the same process as above for Leaders.

### 3. Create/edit Content Pages

In the left-hand panel, select *Content Pages View* under *Shared Views*. All pages will appear in the main display panel.

Click an existing Page to edit the page.

Click on *Add Page* in the top right-hand corner to add a new page. Always select the *Suggested Content Type*.

Enter the relevant informtion into the relevant fields. *Name*, *Slug*, and *Content* are required. Menu Order can be set to create an entry in the top-level menu at the specified position. If left blank, the page can be accessed from a dropdown menu.

*Slug* is the relative url of the page.

*Content* can contain a limited range of text formatting. Use the Heading options for headings rather than just making the text Bold. 

If you copy and paste text from an existing web-site into *Content*, the formatting will be mostly lost. Go to the start of each paragraph, back-space to the end of the previous paragraph, then press *Enter*/*Return*. This will insert the paragraph markers. Then format headings as required.

If you copy and paste from a Pdf or from a Word document, the text formatting *may* survive intact.

### 4, Create/edit dropdown menus

In the left-hand panel, select *Dropdown Menu View* under *Shared Views*. All menus will appear in the main display panel.

Click an existing Menu to edit the menu.

Click on *Add Dropdown Menu* in the top right-hand corner to add a new menu. Always select the *Suggested Content Type*.

You must enter a menu title and menu order. 

You can include items in the dropdown menu by clicking *Link existing entries* under *Child Pages*.

You can re-order menu items by holding a click on a child page and moving it up or down.

You can remove a menu item by clicking on "..." of a child page and selecting *Remove*.

### 5. Create/edit useful links

In the left-hand panel, select *Links by Category View* under *Shared Views*. All categories will appear in the main display panel.

Click an existing category to edit the category.

Click on *Add Link Category* in the top right-hand corner to add a new category. Always select the *Suggested Content Type*.

You must enter a name and sort order. 

You can include existing links in the category by clicking *Link existing entries* under *Links*.

You can add new links to the category by clicking *Create new Link and link*. You must enter a Url and an a name. Description is optional. After you enter the Url and wait a few seconds, a site preview is often (but not always) displayed. You can often copy/paste text into the description field. When finished, click *Publish* from the *DRAFT* dropdown, then click *Close*.

You can re-order links by holding a click on a link and moving it up or down.

You can remove a link by clicking on "..." of a link and selecting *Remove*.

### 6. Update executive committee

In the left-hand panel, select *Contacts View* under *Shared Views*. All contacts will appear in the main display panel. You can sort by name by clicking on the column heading.

You can remove a current office holder by clicking on the name in the display list. Then click "..." on the *Executive Role* and select *Remove*.

You can assign an existing contact to a role by clicking on their name. Then click *Link existing entry* under *Executive Role* and select the required role.

You can create a new contact by clicking *Add Contact* in the top right-hand corner. Always select the *Suggested Content Type*. You must enter a name and phone number. 

### 7. Publishing

Changes are not available to the web-site generator until they are published. Drafts and Changes will not be included in the web-site. 

To see outstanding changes, scroll the left-hand panel of the Content display view down to *Status*. You can select each status to see corresponding entries. 

You can view individual entries and Publish as required. You can also publish in bulk from the display list view.

## How to deploy web-site?

### 1. Manual Deployment

When you are happy with your changes in Contentful and have published them, click the "Deploy to Production" button on the right-hand pane of any Content entry. It will take a number of seconds to build and deploy the new web-site.

### 2. Automatic Deployment

The web-site will automatically build and deploy whenever a pull request is merged into the master branch of this repository.

## How to develop generator?

You need npm and Gatsby CLI installed on your development machine.

### 1. Clone/download the repository

If you have Git installed on your system you can run the following command:

`git clone https://github.com/ManukauTramping/web-site.git`

Otherwise you can directly download it by clicking on download button on this repository.

### 2. Running in development mode

Go inside `web-site/` directory and run the following command:

`npm run develop`

### 3. Open the source code and start editing

The site is now running at
[http://localhost:8000](http://localhost:8000).

Open `web-site/` directory in your code editor of choice and edit it. Save your changes and the browser will update them in real time.
