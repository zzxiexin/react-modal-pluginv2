import React, { useState, useEffect } from 'react';
import './index.less';


interface ModalProps {
    afterClose: Function,
    bodyStyle: Object,
    cancelBack: Function,
    sureBack: Function,
}

const MessageCard: React.FC<ModalProps> = (props) => {

    const { bodyStyle} = props;
    return (
        <div
        className="custome_modal_box"
        style={bodyStyle}
      >
      </div>
    )
} 

export default MessageCard