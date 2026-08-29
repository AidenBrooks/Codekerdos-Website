# Feature courses card design

_Started 2026-08-27 08:54 UTC_

---

## User

For Feature Courses i need all 8 cards should be looks like reference image i need this exact design for all images and use profile images what you use before for instructors use that images for this card also and make motion when hove the card try something cretaive

## User

For Feature Courses i need all 8 cards should be looks like reference image i need this exact design for all images and use profile images what you use before for instructors use that images for this card also and make motion when hove the card try something cretaive

## User

Found issues — fixing…

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Fixed the title/button overlap by widening the clearance to 112px.

## User

make that card mroe creative design in card i don't need this flow things and increase the card height because photos are not looking clear and make that card more creative and motion design while hovering and some of the cards are not having photos use photos i shared you before and then FAQ section i need looks like i attached image dont change the content just make design like that and

## Assistant

_[tool: view_image]_

_[tool: view_image]_

_[tool: list_files]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now add the responsive collapse for the new `.faq-grid`:

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Redesigned course cards: full-bleed taller photo (280px) with a duotone-to-color reveal on hover, sliding title/track label, and an underline-sweep "Explore" link — dropped the route diagram. FAQ section rebuilt as a two-column layout (title/intro left, flat accordion rows with plus→minus icons on the right) matching your reference, content unchanged.

One thing: Amol Mahajan, Sankalp Saxena, and Debjyoti Maity still don't have real photos anywhere in the project — those 3 cards use fillable placeholders. If you have their photos, drop them in and I'll wire them up.

## User

i dont like this dull color to brighten try something different in Hover effects and i want button for Explore, in photo should be just like attached image then use this 3 characters photo in missed to add in cards and feature course and sub content should be in center aligned

## User

i dont like this dull color to brighten try something different in Hover effects and i want button for Explore, in photo should be just like attached image then use this 3 characters photo in missed to add in cards and feature course and sub content should be in center aligned

## User

i dont need blue shadow to hove just use black only and remove that flash while hover the card and explore button should be in bottom not in images

## Assistant

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: run_script]_

All 8 replaced. Now trim the now-unused `.cc-ptext` right-clearance CSS is already fine (full width), verifying render.

_[tool: ready_for_verification]_

Removed the blue hover glow (back to the plain card shadow), removed the light-sweep flash, and moved "Explore" into the card body as a full-width button below the stats instead of sitting on the photo.

## User

change that black color into gradient blue color for Explore button and use this type of context what in attached image and then Guided by experts portion add linked in icon on the slide image in top right corner of the image

## Assistant

_[tool: grep]_

_[tool: run_script]_

Now add the responsive stacking for the new card layout at mobile width:

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Rebuilt the course cards to match the reference: side-by-side layout (photo left, content right), learners/rating row up top, title + description + tags restored, instructor row with cap icon + name + LinkedIn badge, and Brochure (dark) + Explore (blue gradient) buttons at the bottom. Also added a LinkedIn badge to the top-right corner of each mentor photo in "Guided by experts."

## User

Found issues — fixing…

## User

Found issues — fixing…

## User

i want to add the DevOps project file. This is the 15th project that I want to showcase on our website make content also which is matches to that cards should 15 get the names from this make creative

## Assistant



## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: ask_user]_

Waiting on your answers: where the Projects section goes, card style, content depth, and how to handle imagery since we don't have real screenshots.

## User

Answered — placement: Right after Featured Courses; card_style: option_1; content_depth: Title + description + tech-stack tags; imagery: Striped placeholder tiles labeled for the user to drop screenshots in later

## Assistant

_[tool: run_script]_

Now add responsive column collapse for `.pgrid`:

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Added a new "15 real-world DevOps projects" section right after Featured Courses: 15 cards named from your file list (Linux 3-Tier through SRE Observability, including the new 15th), each with a fanned photo-stack visual (droppable placeholder for you to add real screenshots), description, and tech-stack tags.

## User

what the ratio for this image to attach?

## Assistant

The project screenshot slots are ~376×168px, so roughly a **2.2:1 landscape ratio** (e.g. 1400×630px). Since the slot crops to fill (object-fit: cover), anything close to that ratio works fine.

