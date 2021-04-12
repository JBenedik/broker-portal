import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import MaterialTable from 'material-table';
import tableIcons from './tableIcons';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import NewModal from './newModal';

export default function Table({ referrals, tab }) {
  const [tableData, setTableData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if (referrals.length) {
      createTableData();
    }
  }, [referrals])

  const columns = [
    { title: 'First Name', field: 'firstName' },
    { title: 'Last Name', field: 'lastName' },
    { title: 'Phone', field: 'phone' },
    { title: 'Email', field: 'email' },
    { title: 'Status', field: 'status' }
  ]

  //function to match data from API to table columns
  const createTableData = () => {
    const tempData = []
    referrals.map(ref =>
      tempData.push(
        {
          firstName: ref.firstName,
          lastName: ref.lastName,
          phone: '512 512 5125',
          email: ref.email,
          status: getStatus()
        })
    )
    setTableData(tempData)
  }

  const getStatus = () => {
    if (Math.random() < 0.5) {
      return 'Actively Insured'
    } else {
      return 'Expiring in 22 days'
    }
  }

  //Modal functions
  const handleOpen = rowData => {
    setModalData(rowData)
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <React.Fragment>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={tableData}
        title={tab === 'client' ? 'Client Referrals' : 'Broker Referrals'}
        options={{ search: true, paging: true, filtering: false, exportButton: false }}
        actions={[rowData => ({
          icon: EditIcon,
          toolip: 'Edit User',
          onClick: _e => handleOpen(rowData)
        })
        ]}
      />
      <Modal
        open={modalOpen}
        onClose={handleClose}
      >
        <NewModal data={modalData} tab={tab} />
      </Modal>
    </React.Fragment>
  )
}

Table.propTypes = {
  referrals: PropTypes.array,
  tab: PropTypes.string
}