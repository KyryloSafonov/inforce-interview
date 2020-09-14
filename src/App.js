import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header/Header";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import FormDialog from "./components/FormDialog/FormDialog";
import OutlinedCard from "./components/Card/Card";
import CustomizedDialogs from "./components/More/CustomizedDialogs";

function App() {
    const [open, setOpen ] = useState(false);
    const [openSettings, setOpenSettings ] = useState(false);
    const [variant, setVariant ] = useState('create');
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState('');
    const [announcement, setAnnoun] = useState([]);
    const [openMore, setOpenMore ] = useState(false);
    const [obj, setObj] = useState([]);
    const [similar, setSimilar] = useState([]);

    const openDialog = (variant) => {
        setVariant(variant)
        if(variant==='create'){
            setDesc('')
            setDate('')
            setTitle('')
        }
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const settings = () => {
        setOpenSettings(!openSettings)
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleDesc = (e) => {
        setDesc(e.target.value);
    }
    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const saveAnnouncement = (variant, id) => {
        const obj = {
            id:  uuidv4(),
            title: title,
            desc: desc,
            date: date
        }
        const state = announcement;
        if(variant==='edit'){
            const filt = state.filter(el=>el.id!==id)
            filt.push(obj)
            setAnnoun(filt)
            localStorage.setItem('announcements', JSON.stringify(filt))
        }
        else {
            state.push(obj)
            setAnnoun(state);
            localStorage.setItem('announcements', JSON.stringify(state))

        }
    };

    const doSearch = async (e) => {
        e.preventDefault();
        const search = e.target.elements.search.value;
        const searched = await JSON.parse(localStorage.getItem('announcements'))
            .filter((el) => (el.title === search));
        await setAnnoun(searched);
    }

    const searchSimilar = (obj)=> {
        const filterSimilar = announcement.filter((el) => el.title === obj.title||el.desc === obj.desc)
        const filtered = filterSimilar.filter((el) => el!==obj)
        setSimilar(filtered);
    }

    return (
      <div className="App">
          <Header doSearch={doSearch}/>
          <div className='settings'>
          <IconButton onClick={()=>(openDialog('create'))}>
              <AddIcon/>
          </IconButton>
          <IconButton onClick={settings}>
              <SettingsIcon className={openSettings? 'green': ''}/>
          </IconButton>
          </div>
          <FormDialog
              handleClose={handleClose}
              open={open}
              title={title}
              desc={desc}
              date={date}
              handleTitle={handleTitle}
              handleDesc={handleDesc}
              handleDate={handleDate}
              save={saveAnnouncement}
              variant={variant}
              id={id}
          />
          <div className='main-cards'>
              {
                  announcement.map((el)=> {
                      return (
                          <OutlinedCard el={el}
                                        className={'mx-4 my-3'}
                                        key={el.id+'key'}
                                        id={el.id}
                                        title={el.title}
                                        desc={el.desc}
                                        date={el.date}
                                        setAnnoun={setAnnoun}
                                        settings={settings}
                                        setTitle={setTitle}
                                        setDate={setDate}
                                        setDesc={setDesc}
                                        setId={setId}
                                        announcement={announcement}
                                        openSettings={openSettings}
                                        openDialog={openDialog}
                                        setOpenMore={setOpenMore}
                                        setObj={setObj}
                                        searchSimilar={searchSimilar}
                          />
                      )
                  })
              }
          </div>
          <CustomizedDialogs openMore={openMore} setOpenMore={setOpenMore} obj={obj} similar={similar}/>
      </div>
  );
}

export default App;

