"""
Generate layout-based conference pages from _data/conferences.yml
"""
from ruamel.yaml import YAML


with open("_data/conferences.yml") as f:
    conferences = YAML().load(f)

for conference in conferences:
    with open(f"conferences/{conference['id']}.md", "w") as f:
        f.write("---\n")
        front_matter = {
            "layout": "conference.html",
            "tags": "conference",
            "conf": conference,
        }
        YAML().dump(front_matter, f)
        f.write("---\n")
