import React, { useEffect, useState } from 'react'
import toast, { LoaderIcon } from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../lib/axios';
import { ArrowLeftIcon, TrashIcon } from 'lucide-react';

const NoteDetailPage = () => {

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axiosInstance.get(`/notes/${id}`)
        setNote(res.data)
      } catch (error) {
        toast.error("Failed to fetch Note details");
        console.log("Error fetching note details:", error)
      } finally {
        setLoading(false);
      }
    }

    fetchNote();
  },[id])

  const handleDelete = async() => {
    if (!window.confirm("Sure want to delete this Note?")) return;

    try {
      await axiosInstance.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note", error);
      toast.error("Failed to delete the Note");
    }
  }

  const handleSave = async () => {
    if(!note.title.trim() || !note.content.trim()){
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);

    try {
      await axiosInstance.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error updating the note", error);
      toast.error("Failed to update the Note");
    }
  }

  if(loading){
    return(
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className='animate-spin size-10 text-primary' />
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className="max-w-2xl mx-auto">
          <div className='flex items-center justify-between mb-6'>
            <Link to="/" className='btn btn-ghost'>
              <ArrowLeftIcon className='size-5'/>
              Back to Notes
            </Link>
            <button onClick={handleDelete} className='btn btn-error btn-outline'>
              <TrashIcon className='size-5'/>
              Delete Note
            </button>
          </div>
          <div className='card bg-base-100'>
            <div className='card-body'>
              <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered"
                    value={note.title}
                    onChange={(e) => setNote({...note, title: e.target.value})}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Write your Note here..."
                    className="textarea textarea-bordered h-32"
                    value={note.content}
                    onChange={(e) => setNote({...note, content: e.target.value})}
                  />
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={handleSave}
                    className="btn btn-primary text-white"
                    disabled={saving}
                  >
                    {saving ? "Saving..." : "Save Note"}
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage
