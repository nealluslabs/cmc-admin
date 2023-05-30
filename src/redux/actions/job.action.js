import { db } from "../../config/firebase";
import { fetchJobs,fetchCourses, fetchSingleJob,saveUserCourses,saveUsersTaken } from "../reducers/job.slice";
import { useDispatch, useSelector } from "react-redux";
import { notifyErrorFxn, notifySuccessFxn } from 'src/utils/toast-fxn';


export const getJobs = (uid) => async (dispatch) => {
    db.collection('users').get().then((snapshot) => {
        const jobs = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));
        // console.log('Jobs: ', jobs);
        dispatch(fetchJobs(jobs));
}).catch((error) => {
        var errorMessage = error.message;
        console.log('Error fetching courses', errorMessage);
});

};


export const getCourses = (uid) => async (dispatch) => {
    let course = db.collection("courses").doc(uid.trim());
    let idArray;
    course.get().then((doc) => {
    if (doc.exists) {
       
        
        const trimmedArray = doc.data().watched.map((item)=>(item.trim()))
       idArray = [...trimmedArray] 
   console.log('trimmed array is', idArray)  
   
   
      
        
    } else {
        console.log("No such document, WHEN TRYING TO GET the course 0");
    }
}).then(()=>{
   

    /*const movie =*/ db.collection('users').where('uid', 'in',idArray)
    .get().then((snapshot) => {
      const courseList = snapshot.docs.map((doc) => ({ ...doc.data() }));
      console.log("course-LIST  :",courseList)
     
      if (courseList.length) {
      
    dispatch(saveUsersTaken(courseList));  
    console.log("users taken -LIST IS  :",courseList)
    
      //window.alert(doc.data().url);
      // notifyErrorFxn("no course for this user❌")
  
    } else {
        
        //notifyErrorFxn("no course for this user❌")
        console.log("No such courses taken for this document!");
    }
  }).catch((error) => {
    window.alert(error);
    console.log("Error getting document:", error);
  });

})

};


export const getUserCourses = (uid) => async (dispatch) => {

   // const { jobs } = useSelector((state) => state.jobs);
   // console.log(" I AM SUPPOSED TO GET USERS FROM REDUX",jobs)
   // const chosenUser =jobs.length? jobs.filter((item)=>{return item.uid === uid}):[]
   // console.log("chosenUser is now",chosenUser)
   // const idArray = chosenUser.watched

   let idArray = [];

    let user = db.collection("users").doc(uid);

    user.get().then((doc) => {
    if (doc.exists) {
       
        
        const trimmedArray = doc.data().watched.map((item)=>(item.trim()))
       idArray = [...trimmedArray] 
   console.log('trimmed array is', idArray)  
   
   
     
        
    } else {
        console.log("No such document, WHEN TRYING TO GET COURSES!");
    }
}).then(()=>{
   

    /*const movie =*/ db.collection('courses').where('uid', 'in',idArray.slice(0,6))
    .get().then((snapshot) => {
      const courseList = snapshot.docs.map((doc) => ({ ...doc.data() }));
      console.log("PROBLEM-LIST  :",courseList)
     
      if (courseList.length) {
      
    dispatch(saveUserCourses(courseList));  
    console.log("success PROBLEM-LIST IS  :",courseList)
    
      //window.alert(doc.data().url);
      // notifyErrorFxn("no course for this user❌")
  
    } else {
        
        //notifyErrorFxn("no course for this user❌")
        console.log("No such courses taken for this document!");
    }
  }).catch((error) => {
    window.alert(error);
    console.log("Error getting document:", error);
  });

})

}



export const getSingleJob = (id) => async (dispatch) => {
    var job = db.collection("Jobs").doc(id);

    job.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        dispatch(fetchSingleJob(doc.data()));
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

};

export const addJob = (job, setLoading, clearState) => async (dispatch) => {
    db.collection("Jobs").add({
        title: job.title,
        description: job.description,
        location: job.location,
        rate: job.rate
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        clearState();
        setLoading(false);
        alert('Job has been added.✔');
        
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert('Error adding job.❌')
    });

};
export const updateJob = (job, setLoading, clearState, history) => async (dispatch) => {

    var jobRef = db.collection("Jobs").doc(job.id);
    const jobData = jobRef.update({
        title: job.title,
        description: job.description,
        location: job.location,
        rate: job.rate
    })
    .then(() => {
        setLoading(false);
        alert('Job has been updated.✔');
        history.push('/company/jobs');
        
    })
    .catch((error) => {
        console.error("Error updating document: ", error);
        // alert('Error updating job.❌')
        setLoading(false);
    });

};