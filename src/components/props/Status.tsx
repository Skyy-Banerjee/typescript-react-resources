//literal types

type StatusProps = {
    status: 'loading' | 'success' | 'error',
}

function Status({status}: StatusProps) {
    let msg;
    if(status==='loading'){
        msg='Loading...⌛';
    }else if(status==='success'){
        msg='Data fetced successfully!🎉';
    }else{
        msg='Error fetching data⚠️';
    }

  return (
    <div>
      <h2>{msg}</h2>
    </div>
  )
}

export default Status
