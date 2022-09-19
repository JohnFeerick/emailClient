import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './EmailList.css'
import EmailRow from './EmailRow'
import { db } from './firebase'
import Section from './Section'

function EmailList() {
  const [emails, setEmails] = useState([]);
  
  useEffect(() => {
    db.collection('emails')
      .orderBy('timeStamp', 'desc')
      .onSnapshot(snapShot => 
        setEmails(
          snapShot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      ); 
  }, []);
  return (
    <div className='emailList'>
        <div className="emailList__settings">
            <div className="emailList__settingsLeft">
                <Checkbox/>
                <IconButton>
                    <ArrowDropDown/>
                </IconButton>
                <IconButton>
                    <Redo/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
            <div className="emailList__settingsRight">
                <IconButton>
                    <ChevronLeft/>
                </IconButton>
                <IconButton>
                    <ChevronRight/>
                </IconButton>
                <IconButton>
                    <KeyboardHide/>
                </IconButton>
                <IconButton>
                    <Settings/>
                </IconButton>
            </div>
        </div>
        <div className="emailList__sections">
            <Section Icon={Inbox} title='Primary' color="red" selected={true}/>
            <Section Icon={People} title='Social' color="#1A73E8" />
            <Section Icon={LocalOffer} title='Promotions' color="green" />
        </div>
        <div className="emailList__list">
            {emails.map(({id, data: {to, subject, message, timeStamp}}) => (
                <EmailRow 
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timeStamp?.seconds*1000).toUTCString()}
                />
            ))}
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
            />
        </div>
    </div>
  )
}

export default EmailList