from core import db
from core.models.user import Useraccount

# Clear it all out
db.drop_all()
# Set it back up``
db.create_all()

l = Useraccount(username="Start", password="First", email="1@email.com")
db.session.add(l)
db.session.commit()
