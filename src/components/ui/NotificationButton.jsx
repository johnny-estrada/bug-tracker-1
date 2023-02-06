import '../../assets/styles/components/ui/NotificationButton.css'

function NotificationButton() {
  return (
    <>
        <img
          className="bell-img"
          src="../icon-dashboard.svg"
          alt="Dashboard icon"
          width="30px"
          height="30px"
        />
        
        <img
          className="bell-img"
          src="../icon-bell.svg"
          alt="Bell icon"
          width="30px"
          height="30px"
        />
    
    </>
  )
}

export default NotificationButton